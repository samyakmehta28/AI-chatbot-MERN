import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const createToken = (id: String, email: String) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  return token;
};

//this will act as middleware to verify the token
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = await req.signedCookies.auth_token;
  if (!token || token.trim() === '') {
    const { email, password } = req.body;
    if (email === '' && password === '') {
      return res
        .status(401)
        .json({ message: 'Please enter email and password' });
    }
    next();
  } else {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded.email);
      const getUser = await User.findOne({ email: decoded.email });
      if (!getUser) {
        return res.status(401).json({
          message: 'User not found or deleted, please login in or sign up',
        });
      }
      return res
        .status(200)
        .json({ message: 'OK', name: getUser.name, email: getUser.email });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
};

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = await req.signedCookies.auth_token;
  if (!token || token.trim() === '') {
    return res.status(401).json({ message: 'Please login or signup' });
  } else {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded.email);
      const getUser = await User.findOne({ email: decoded.email });
      if (!getUser) {
        return res.status(401).json({
          message: 'User not found or deleted, please login in or sign up',
        });
      }
      req.body = { ...req.body, email: decoded.email };
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
};
