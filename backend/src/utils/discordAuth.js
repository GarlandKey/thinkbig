import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';
import User from '../models/userModel.js';

const dotenv = process.env;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(new DiscordStrategy({
  clientID: dotenv.DISCORD_CLIENT_ID,
  clientSecret: dotenv.DISCORD_CLIENT_SECRET,
  callbackURL: dotenv.DISCORD_CALLBACK_URL,
  scope: ['identify', 'guilds'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ discordId: profile.id });
    if (!user) {
      user = new User({
        discordId: profile.id,
        username: profile.username,
        avatar: profile.avatar,
        guilds: profile.guilds,
        status: profile.status,
      });
      await user.save();
    }
    done(null, user);
  } catch (error) {
    console.log(error);
    done(error, null);
  }
}));

export default passport;