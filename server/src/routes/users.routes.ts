import express from 'express';
import { createUser, login, forgotPassword, verifyToken, resetPassword } from '../controllers/users.controllers';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.get('/verify/:token', verifyToken);

export default router;
