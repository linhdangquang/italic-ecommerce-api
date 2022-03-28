import express from 'express';
import { signUp, signIn } from '../controllers/auth.controller';

const router = express.Router();

router.post('/users/signup', signUp);
router.post('/users/signin', signIn);

export default router;
