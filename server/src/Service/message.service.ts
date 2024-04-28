import { Request, Response } from "express";
import { Message } from "../Models/Message";
import axios from "axios";

const sendMessageToLLM = async (message: string) => {
  try {
    const response = await axios.post(
      `https://7588-41-66-228-33.ngrok-free.app/api/v1/llm/chat?question=${message}`
    );
    return response.data;
  } catch (error) {
    return { status: "failed", message: "an error occured" };
  }
};

export const createMessage = async (req: Request) => {
  try {
    const { chat_id, message, from } = req.body;

    // send the message to the llm
    const userMessage = await Message.create({
      chat_id,
      message,
      from,
    });
    const llmResponse = await sendMessageToLLM(message);
    if (!userMessage) {
      return {
        status: "failed",
        message: "failed to create send a question, try again",
      };
    }

    if (!llmResponse) {
      return {
        status: "failed",
        message: "failed to generate a question, try again",
      };
    }
    const aiMessage = await Message.create({
      chat_id,
      message: llmResponse,
      from: "AI",
    });
    return {
      status: "success",
      message: "successfully created a new message",
      userMessage,
      aiMessage,
    };
  } catch (error) {
    return { status: "error", message: "An error occured" };
  }
};

export const getChatMessages = async (req: Request) => {
  try {
    const result = await Message.find({ chat_id: req.body.chat_id }).sort({
      createdAt: 1,
    });
    return {
      status: "success",
      messsage: "successfully retrieved chat messages",
      data: result,
    };
  } catch (error) {
    return { status: "error", message: "An error occured" };
  }
};
