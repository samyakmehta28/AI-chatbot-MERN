import React, { useEffect } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseAuthContext } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // I can use states to manage the state of the inputs using the e.target.value and e.target.name
  // but form data makes it easier to get the values of the inputs
  const auth = UseAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.isLoggedIn) {
      navigate('/chat');
    }
  }, [auth?.isLoggedIn]);

  const [Msg, setMsg] = React.useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    // console.log(newUser);
    e.currentTarget.reset();
    try {
      await auth?.signup(
        newUser.name as string,
        newUser.email as string,
        newUser.password as string
      );
      setMsg('Signup Successful');
      navigate('/');
    } catch (error: any) {
      if (!error.response) {
        console.log(error);
      } else if (error.response.status === 422) {
        setMsg(error?.response?.data?.errors);
      } else if (error.response.status === 401) {
        setMsg(error?.response?.data?.message);
      } else {
        setMsg('Sign-Up Unsuccessful');
      }
    }
  };
  return (
    <div className="login-container">
      <div className="login-image">
        <img src="airobot.png" alt="Airobot" />
      </div>
      <div className="login-form">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Signup</h1>
          {Msg && <p style={{ color: 'red' }}>{Msg}</p>}
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button className="btn btn-success" type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
