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

export const sendMessage = async (message: string) => {
  const res = await axios.post('/chats/new', { message });
  if (res.status !== 200) {
    throw new Error('Error in sending message');
  }
  return res.data;
};

export const getMessageHistory = async () => {
  const res = await axios.get('/chats/history');
  if (res.status !== 200) {
    throw new Error('Error in getting message history');
  }
  return res.data;
};

export const clearChatHistory = async () => {
  const res = await axios.delete('/chats/clear');
  if (res.status !== 200) {
    throw new Error('Error in clearing chat history');
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
