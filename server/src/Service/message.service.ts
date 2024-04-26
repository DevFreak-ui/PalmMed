import { Request, Response } from "express";
import { Message } from "../Models/Message";

export const createMessage = async (req: Request) => {
  try {
    const { chat_id, message, from } = req.body;
    const result = await Message.create({
      chat_id,
      message,
      from
    });
    if (!result) {
      return {
        status: "failed",
        message: "failed to create a message, try again",
      };
    }
    return {
      status: "success",
      message: "successfully created a new message",
      data: result,
    }
  } catch (error) {
    return { status: "error", message: "An error occured" };
  }
};