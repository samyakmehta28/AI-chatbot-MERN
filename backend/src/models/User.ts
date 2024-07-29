import { randomUUID } from 'crypto';
import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => randomUUID(),
  },
  role: {
    type: String,
    required: [true, 'must provide role'],
  },
  content: {
    type: String,
    required: [true, 'must provide content'],
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    minlength: [3, 'name must be at least 3 characters long'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
  },
  chats: {
    type: [ChatSchema],
    default: [],
  },
});

export const User = mongoose.model('User', UserSchema);
