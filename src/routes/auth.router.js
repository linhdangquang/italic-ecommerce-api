import express from 'express';
import { signUp, signIn, getUser, logOutUser, logOutAllTokens } from '../controllers/auth.controller';
import {verifyToken} from '../middleware/auth.js';
const router = express.Router();
const BASE_URL = '/api/users';
router.post(`${BASE_URL}/signup`, signUp);
router.post(`${BASE_URL}/signin`, signIn);
router.get(`${BASE_URL}/me`, verifyToken, getUser);
router.post(`${BASE_URL}/me/logout`, verifyToken, logOutUser)

export default router;
