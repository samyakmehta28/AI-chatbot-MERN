import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './db/connection.js';
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
config();
const app = express();
const port = 3000;

//middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan('dev'));

//routes
app.use('/api/v1', appRouter);

//default route
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello World!' });
});

//listeners and connecting to DB
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port} and connected to DB`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
