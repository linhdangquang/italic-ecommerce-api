import express from 'express';
import { signUp, signIn, getUser, logOutUser, logOutAllTokens } from '../controllers/auth.controller';
import {verifyToken} from '../middleware/auth.js';
const router = express.Router();

router.post('/users/signup', signUp);
router.post('/users/signin', signIn);
router.get('/users/me', verifyToken, getUser);
router.post('/users/me/logout', verifyToken, logOutUser)
router.post('/users/me/logoutall', verifyToken, logOutAllTokens)

export default router;
