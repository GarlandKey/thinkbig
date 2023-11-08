import express from 'express';
import passport from 'passport';
import '../utils/discordAuth.js';

const router = express.Router();

router.get('/discord', passport.authenticate('discord'));
router.get('/dicord/callback', passport.authenticate('discord', {
  failureRedirect: '/login',
}), (req, res) => {
  res.redirect('/');
});

export default router;