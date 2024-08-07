import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User.js';
import { getOpenAIResponse } from '../services/openAI-response-service.js';

export const generateResponse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, email } = req.body;
  if (!message || message === '') {
    return res.status(400).json({ message: 'Please enter a message' });
  }
  let user: any = null;
  try {
    user = await User.findOne({ email });
  } catch (error) {
    return res.status(500).json({ message: 'Database: Internal Server Error' });
  }
  if (!user) {
    return res.status(401).json({ message: 'Please login or session expired' });
  }
  const messageHistory = user.chats.map((chat) => {
    return { role: chat.role, content: chat.content };
  });
  if (messageHistory.length === 0) {
    messageHistory.push({
      role: 'system',
      content: 'You are a helpful assistant.',
    });
  }
  messageHistory.push({ role: 'user', content: message });

  //   console.log(messageHistory);
  try {
    const response = await getOpenAIResponse(messageHistory);
    user.chats.push({ role: 'user', content: message });
    user.chats.push(response);
    await user.save();
    return res.status(200).json({ message: 'OK', data: user.chats });
  } catch (error) {
    return res.status(500).json({ message: 'Open AI internal Server Error' });
  }
};
