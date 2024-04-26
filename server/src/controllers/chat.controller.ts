import { NextFunction, Request, Response } from "express";
import { createNewChat } from "../Service/chat.service";

export const initiateChat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await createNewChat(req);
        if(results.status !== "success"){
            return res.status(400).json(results)
        }
        return res.status(201).json(results)
    } catch(error) {
        return next(error);
    }
  };