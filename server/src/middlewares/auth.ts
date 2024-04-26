import { NextFunction, Request, Response } from "express";
import { User as UserSchema } from "../Models/User";
import jwt, { JwtPayload } from "jsonwebtoken";

interface ReqTyp extends Request {
  user: any;
}

const auth = async (req: any, res: Response, next: NextFunction) => {
    let token: any;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(' ')[1]
    }

    try {
        const decode = jwt.verify(token, `${process.env.JWT_PRIVATE_KEY}`) as JwtPayload
        if(!decode) return res.status(401).json({message: "unauthorized access"})

        const user = await UserSchema.findById(decode.id)
        if(!user) return res.status(404).json({message: "no user found"})


        //assign user to request
        req.user = user;
        next()
        
    } catch (error) {
        next(error)
    }
}

export default auth;
