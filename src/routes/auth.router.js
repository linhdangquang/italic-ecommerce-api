import express from 'express';
import { signUp, signIn } from '../controllers/auth.controller';
import {verifyToken} from '../middleware/auth.js';
const router = express.Router();

router.post('/users/signup', signUp);
router.post('/users/signin', signIn);
router.get('/users/me', verifyToken, (req, res) => {
 res.json(req.user);
});

export default router;
