import { UseAuthContext } from '../../context/auth-context';
import { Link, useNavigate } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
  const useAuthContext = UseAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    //can use try catch block too.
    useAuthContext
      ?.logout()
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      {useAuthContext?.isLoggedIn ? (
        <>
          <Link className="button-link" to="/chat">
            Chat
          </Link>
          <button className="button-link" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="button-link" to="/login">
            Login
          </Link>
          <Link className="button-link" to="/signup">
            Signup
          </Link>
        </>
      )}
    </div>
  );
};
export default NavLinks;
