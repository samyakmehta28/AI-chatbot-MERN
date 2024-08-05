import { User } from '../models/User.js';
import { Request, Response } from 'express';
import { hash, compare } from 'bcrypt';
import { createToken } from '../utils/token-manager.js';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: 'OK', users });
  } catch (error) {
    return res.status(404).json({ message: 'Not Found', error: error.message });
  }
};

export const userSignup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const getUser = await User.findOne({ email });
    if (getUser) {
      return res.status(401).json({ message: 'User already exists' });
    }
    const hashedPassword = await hash(password, 10);
    const user = new User({ password: hashedPassword, name, email });
    await user.save();
    res.clearCookie('auth_token', {
      httpOnly: true,
      signed: true,
      domain: 'localhost',
      path: '/',
    });
    const token = createToken(user._id.toString(), user.email);
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie('auth_token', token, {
      httpOnly: true,
      path: '/',
      domain: 'localhost',
      signed: true,
      expires,
    });
    return res
      .status(201)
      .json({ message: 'OK', name: getUser.name, email: getUser.email });
  } catch (error) {
    //console.log(error);
    return res.status(404).json({ message: 'Error', error: error.message });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const getUser = await User.findOne({ email });
    if (!getUser) {
      return res.status(401).json({
        message:
          'User not found please enter correct credentials or signup to create a account',
      });
    }
    const isMatch = await compare(password, getUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect Password' });
    }
    res.clearCookie('auth_token', {
      httpOnly: true,
      signed: true,
      domain: 'localhost',
      path: '/',
    });
    const token = createToken(getUser._id.toString(), getUser.email);
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie('auth_token', token, {
      httpOnly: true,
      path: '/',
      domain: 'localhost',
      signed: true,
      expires,
    });
    return res
      .status(200)
      .json({ message: 'OK', name: getUser.name, email: getUser.email });
  } catch (error) {
    // console.log(error);
    return res.status(404).json({ message: 'Error', error: error.message });
  }
};

export const userLogout = async (req: Request, res: Response) => {
  try {
    res.clearCookie('auth_token', {
      httpOnly: true,
      signed: true,
      domain: 'localhost',
      path: '/',
    });
    return res.status(200).json({ message: 'User successfully logged out' });
  } catch (error) {
    return res.status(404).json({ message: 'Error', error: error.message });
  }
};
