import { Request, Response } from "express";
import { Chat } from "../Models/Chat";

export const createNewChat = async (req: Request) => {
  try {
    const { email, user_id } = req.body;
    const result = await Chat.create({
      email,
      user_id,
    });
    if (!result) {
      return {
        status: "failed",
        message: "failed to create new chat, try again",
      };
    }
    return {
      status: "success",
      message: "successfully created a new chat",
      data: result,
    }
  } catch (error) {
    return { status: "error", message: "An error occured" };
  }
};
