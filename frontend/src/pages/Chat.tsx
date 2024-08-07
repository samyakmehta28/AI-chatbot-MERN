import './Chat.css';
import { UseAuthContext } from '../context/auth-context';
import { dummy_list } from './dummy_messages';

const Chat = () => {
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
          <button className="btn btn-danger">Clear Chat</button>
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-messages">
          {dummy_list.map((message, index) => (
            <div key={index} className={`chat-message ${message.role}`}>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <textarea
            className="chat-input"
            placeholder="Type your message here"
          ></textarea>
          <button className="btn btn-primary" style={{ marginLeft: '20px' }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
