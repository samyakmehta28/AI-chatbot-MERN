import express from 'express';
import { authenticateUser } from '../utils/token-manager.js';
import {
  generateResponse,
  getMessageHistory,
  clearChatHistory,
} from '../controllers/chat-controller.js';

const router = express.Router();
router.post('/new', authenticateUser, generateResponse);
router.get('/history', authenticateUser, getMessageHistory);
router.delete('/clear', authenticateUser, clearChatHistory);

export default router;
