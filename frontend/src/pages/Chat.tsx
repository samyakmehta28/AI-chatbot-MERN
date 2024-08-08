import './Chat.css';
import { UseAuthContext } from '../context/auth-context';
import { useEffect, useState } from 'react';
import {
  sendMessage,
  getMessageHistory,
  clearChatHistory,
} from '../helper/api-communicator';

type message = {
  content: string;
  role: 'user' | 'assistant';
};

const Chat = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [chatList, setChatList] = useState<[message] | []>([]);

  useEffect(() => {
    const fetchMessagesHistory = async () => {
      try {
        const res = await getMessageHistory();
        setChatList(res.chats);
      } catch (error: any) {
        alert(error?.response?.data?.message);
      }
    };
    fetchMessagesHistory();
  }, []);

  const clearChat = async () => {
    try {
      const res = await clearChatHistory();
      setChatList(res.chats);
    } catch (error: any) {
      alert(error?.response?.data?.message);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
  };

  const handleInputSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await sendMessage(inputMessage);
      // console.log(res.chats);
      setChatList(res.chats);
    } catch (error: any) {
      alert(error?.response?.data?.message);
    }
    setInputMessage('');
  };

  const auth = UseAuthContext();
  return (
    <div className="chat-container">
      <div className="chat-info">
        <div className="chat-welcome">
          <p>Welcome</p>
          <p>{auth?.user?.name}</p>
        </div>
        <div className="chat-instruction">
          <p>
            Simply type your question or request in the chat below, and our AI
            chatbot will assist you with personalized responses and support.
          </p>
        </div>
        <div className="chat-clear">
          <button className="btn btn-danger" onClick={clearChat}>
            Clear Chat
          </button>
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-messages">
          {chatList.map((message, index) => (
            <div key={index} className={`chat-message ${message.role}`}>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <textarea
            className="chat-input"
            placeholder="Type your message here"
            value={inputMessage} // Bind the state to the value
            onChange={handleInputChange} // Bind the event handler to onChange
          ></textarea>
          <button
            className="btn btn-primary"
            style={{ marginLeft: '20px' }}
            onClick={handleInputSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
