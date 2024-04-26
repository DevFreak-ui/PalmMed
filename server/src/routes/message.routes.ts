import express from 'express';
import { initiateMessage, retrieveChatMessages } from '../controllers/message.controller';



const router = express.Router();

router.post("/initiate-message", initiateMessage);
router.post("/retrieve-chat-messages", retrieveChatMessages);



export default router;
