import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import { UseAuthContext } from '../context/auth-context';

const Welcome1 = () => {
  return (
    <TypeAnimation
      sequence={[
        'Welcome to the AI Assistant',
        500,
        'Please Login to your account to continue', //  Continuing previous Text
        500,
        'Or Signup if you are new here',
        500,
      ]}
      repeat={Infinity}
    />
  );
};

const Welcome2 = () => {
  const auth = UseAuthContext();
  return (
    <TypeAnimation
      sequence={[
        `Welcome ${auth?.user?.name}`,
        500,
        'Go to Chats to start chatting', //  Continuing previous Text
        500,
        'Type your message and get the AI response',
        500,
      ]}
      repeat={Infinity}
    />
  );
};

const Home = () => {
  const auth = UseAuthContext();
  return (
    <div className="home-page">
      <div className="welcome-text">
        {auth?.isLoggedIn ? <Welcome2 /> : <Welcome1 />}
      </div>
      <div className="image-container">
        <img className="openai-logo" src="./openai.png" alt="OpenAI Logo" />
      </div>
    </div>
  );
};
export default Home;
