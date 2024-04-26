import { NextFunction, Request, Response } from "express";
import { createMessage } from "../Service/message.service";


export const initiateMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await createMessage(req);
        if(results.status !== "success"){
            return res.status(400).json(results)
        }
        return res.status(201).json(results)
    } catch(error) {
        return next(error);
    }
  };