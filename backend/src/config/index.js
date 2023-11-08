// /backend/src/config/index.js

import { connect } from 'mongoose';

const connectMongoDB = () => {
  connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));
};

export default connectMongoDB;