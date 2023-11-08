// /backend/index.js
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import connectMongoDB from './src/config/index.js';
import authRoutes from './src/routes/authRoutes.js';

const PORT = process.env.PORT;
const app = express();

connectMongoDB();

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});