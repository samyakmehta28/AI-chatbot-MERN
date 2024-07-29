import express from 'express';
import {
  getAllUsers,
  userSignup,
  userLogin,
} from '../controllers/user-controller.js';
import {
  validate,
  signupValidator,
  loginValidator,
} from '../utils/validators.js';
const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', validate(signupValidator), userSignup);
router.post('/login', validate(loginValidator), userLogin);

export default router;
