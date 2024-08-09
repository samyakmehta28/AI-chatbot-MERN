import { createContext, useContext, useEffect, useState } from 'react';
import { loginUser, logoutUser, signupUser } from '../helper/api-communicator';

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

//need to provide a default value in TypeScript.
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //fetch if user cookies are valid then skip login page
    async function checkAuth() {
      //if there is axios error, it will be caught in the catch block that calls this function
      try {
        const data = await loginUser('', '');
        if (data && data.name && data.email) {
          setUser({ name: data.name, email: data.email });
          setIsLoggedIn(true);
        }
      } catch (error) {
        // console.log('Logging it here', error);
        // alert('Please login or signup');
      } finally {
        setIsLoading(false);
      }
    }
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    //if there is axios error, it will be caught in the catch block that calls this function
    const data = await loginUser(email, password);
    if (data) {
      setUser({ name: data.name, email: data.email });
      setIsLoggedIn(true);
    }
  };
  const signup = async (name: string, email: string, password: string) => {
    const data = await signupUser(name, email, password);
    if (data) {
      setUser({ name: data.name, email: data.email });
      setIsLoggedIn(true);
    }
  };
  const logout = async () => {
    try {
      const data = await logoutUser();
      setUser(null);
      setIsLoggedIn(false);
      return data;
    } catch (error) {
      throw new Error('Error in logging out');
    }
  };

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// we basically make AuthContext available to all components in the app without
//exposing AuthContext to other components, we use functions instead to access the context.
export const UseAuthContext = () => {
  return useContext(AuthContext);
};
