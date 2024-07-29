import jwt from 'jsonwebtoken';

export const createToken = (id: String, email: String) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  return token;
};
