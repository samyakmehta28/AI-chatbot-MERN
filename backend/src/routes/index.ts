import express from 'express';
import userRouter from './user-routes.js';
import chatRouter from './chat-routes.js';

const router = express.Router();

// /api/v1/user
router.use('/user', userRouter);
// /api/v1/chats
router.use('/chats', chatRouter);

export default router;
