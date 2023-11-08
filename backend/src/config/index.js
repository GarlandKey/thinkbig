import { connect } from 'mongoose';

const connectMongoDB = () => {
  connect(process.env.MONGODB_URI || 'mongodb://localhost/thinkbig', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));
};

export default { connectMongoDB };