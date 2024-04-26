import express from 'express';
import { createUser, login, forgotPassword, verifyToken, resetPassword, findMe} from '../controllers/users.controllers';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.get('/verify/:token', verifyToken);
router.get('/me', auth, findMe);

export default router;
