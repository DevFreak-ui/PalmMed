import express from "express";
import {
  initiateMessage,
  retrieveChatMessages,
} from "../controllers/message.controller";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/initiate-message", initiateMessage);
router.post("/retrieve-chat-messages", retrieveChatMessages);

export default router;
