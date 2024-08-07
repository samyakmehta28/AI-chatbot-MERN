import OpenAI from 'openai';
import { config } from 'dotenv';
config();

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};
const openai = new OpenAI(configuration);

// Export the configured OpenAI client
export default openai;
