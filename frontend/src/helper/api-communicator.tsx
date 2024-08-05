import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
  //   console.log('logging in user');
  const res = await axios.post('/user/login', { email, password });
  if (res.status !== 200) {
    throw new Error('Error in login');
  }
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.get('/user/logout');
  if (res.status !== 200) {
    throw new Error('Error in logout');
  }
  return res.data;
};

// export const checkAuthStatus = async () => {
//   const res = await axios.get('/user/verify');
//   if (res.status !== 200) {
//     throw new Error('Error in verifying');
//   }
//   return await res.data;
// };
