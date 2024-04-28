import { NextFunction, Request, Response } from "express";
import { Prediction } from "../Models/Predictions";
import axios from "axios";
import { User } from "../Models/User";

export const predict = async(req: any, res: Response) => {
    try {

        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).json({message: "no user found"})
        }

        const response = await axios.post("https://palmmed.onrender.com/predict", req.body)

        if(response.data){
            const reponseData = await axios.post("https://hearty-o4ui.onrender.com/api/v1/llm/predict", response.data)
            const results = await Prediction.create({
                ...req.body,
            doctor_id: req.user.id,
            prediction: response.data
            })
            if(!results){
                return res.status(400).json({message: "prediction failed"})
            }
            return res.status(201).json({resData: reponseData.data, results})
        }
    } catch (error) {
        console.log(error);
    }
}