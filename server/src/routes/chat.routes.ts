import express from 'express';
import { clearChat, getChatHistory, initiateChat } from '../controllers/chat.controller';



const router = express.Router();

router.post("/initiate-chat", initiateChat);
router.post("/get-chat-history", getChatHistory);
router.delete("/clear-chat", clearChat);


export default router;
