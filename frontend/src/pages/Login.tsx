import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseAuthContext } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // I can use states to manage the state of the inputs using the e.target.value and e.target.name
  // but form data makes it easier to get the values of the inputs
  const auth = UseAuthContext();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = React.useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    // console.log(newUser);
    e.currentTarget.reset();
    try {
      await auth?.login(newUser.email as string, newUser.password as string);
      navigate('/');
    } catch (error: any) {
      if (error.response.status === 422) {
        setErrorMsg(error?.response?.data?.errors);
      } else if (error.response.status === 401) {
        setErrorMsg(error?.response?.data?.message);
      } else {
        setErrorMsg('Login Unsuccessful');
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
          <h1>Login</h1>
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
