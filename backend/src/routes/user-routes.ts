import express from 'express';
import {
  getAllUsers,
  userSignup,
  userLogin,
  userLogout,
} from '../controllers/user-controller.js';
import {
  validate,
  signupValidator,
  loginValidator,
} from '../utils/validators.js';
import { verifyToken } from '../utils/token-manager.js';
const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', validate(signupValidator), userSignup);
router.post('/login', verifyToken, validate(loginValidator), userLogin); //verifying if cookies exist middleware
router.get('/logout', userLogout); //add authentication middleware before logging out (if authorized to logout)

export default router;
