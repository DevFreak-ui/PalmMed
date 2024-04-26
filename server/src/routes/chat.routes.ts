import express from 'express';
import { initiateChat } from '../controllers/chat.controller';
import auth from '../middlewares/auth';


const router = express.Router();

router.post("/initiate-chat", initiateChat);



export default router;
