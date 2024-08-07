import express from 'express';
import { authenticateUser } from '../utils/token-manager.js';
import { generateResponse } from '../controllers/chat-controller.js';

const router = express.Router();
router.post('/new', authenticateUser, generateResponse);

export default router;
