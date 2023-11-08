import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  discordId: String,
  username: String,
  avatar: String,
  guilds: Array,
  status: String,
});

const User = mongoose.model('User', userSchema);

export default User;