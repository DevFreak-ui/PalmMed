import express from "express";
import {
  clearChat,
  getChatHistory,
  initiateChat,
} from "../controllers/chat.controller";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/initiate-chat", auth, initiateChat);
router.post("/get-chat-history", auth, getChatHistory);
router.delete("/clear-chat", auth, clearChat);

export default router;
