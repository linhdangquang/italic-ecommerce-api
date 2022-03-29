import express from 'express';
import { signUp, signIn, getUser, logOutUser } from '../controllers/auth.controller';
import {verifyToken} from '../middleware/auth.js';
const router = express.Router();

router.post('/users/signup', signUp);
router.post('/users/signin', signIn);
router.get('/users/me', verifyToken, getUser);
router.post('/users/me/logout', verifyToken, logOutUser)

export default router;
