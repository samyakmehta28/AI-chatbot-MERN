import mongoose from 'mongoose';

export const connectDB = (url) => {
  return mongoose.connect(url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
    // useUnifiedTopology: true,
  });
};

export const disconnectDB = (url) => {
  return mongoose.disconnect();
};
