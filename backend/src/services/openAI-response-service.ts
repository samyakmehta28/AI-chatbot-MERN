import openai from './openAI-client-service.js';

export const getOpenAIResponse = async (messages: any) => {
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
  });

  // console.log(completion.choices[0].message);
  return completion.choices[0].message;
};
