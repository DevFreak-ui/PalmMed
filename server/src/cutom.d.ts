import { Request } from "express";
import { IUser } from "../Models/User";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
