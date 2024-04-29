import { Response } from "express";
import { Prediction } from "../Models/Predictions";
import { Reports } from "../Models/Report";
import { User } from "../Models/User";

export const createNewReport = async (req: any, res: Response) => {
  const id = req.params.id;
  try {
    const prediction = await Prediction.findById(id);
    if (!prediction) {
      return res.status(400).json({ message: "no reult found" });
    }

    const reportData = await Reports.create({
      verdict: req.body.verdict,
      prediction_id: prediction._id,
    });

    return res.status(201).json({ reportData });
  } catch (error) {
    console.log(error);
  }
};

export const allReport = async (req: any, res: Response) => {
  try {
    const reports = await Reports.find()
      .populate({
        path: "prediction_id",
        populate: [{ path: "user_id" }, { path: "doctor_id" }],
      })
      .exec();
    if (!reports) {
      return res.status(400).json({ message: "no reult found" });
    }

    return res.status(201).json({ reports });
  } catch (error) {
    console.log(error);
  }
};

export const findOneReport = async (req: any, res: Response) => {
  try {
    const report = await Reports.findById(req.params.id)
        .populate({
        path: "prediction_id",
        populate: [{ path: "user_id" }, { path: "doctor_id" }],
      })
      .exec();
    if (!report) {
      return res.status(400).json({ message: "no reult found" });
    }
    return res.status(201).json({ report });
  } catch (error) {
    console.log(error);
  }
};
