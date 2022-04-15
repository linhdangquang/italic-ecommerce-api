import express from 'express';
import { signUp, signIn, getAllUsers, changeInfo} from '../controllers/auth.controller.js';
import { isAdmin, isAuth, verifyToken } from '../middleware/auth.js';
const router = express.Router();
const BASE_URL = '/api/users';
router.post(`${BASE_URL}/signup`, signUp);
router.post(`${BASE_URL}/signin`, signIn);
router.get(`${BASE_URL}/:userId`, verifyToken, isAuth, isAdmin, getAllUsers )
router.put(`${BASE_URL}/:userId`, verifyToken, isAuth, changeInfo)

export default router;
