import express from "express";
import {
  initiateMessage,
  retrieveChatMessages,
} from "../controllers/message.controller";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/initiate-message", auth, initiateMessage);
router.post("/retrieve-chat-messages", auth, retrieveChatMessages);

export default router;
