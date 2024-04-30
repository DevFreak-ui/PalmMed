import { NextFunction, Response } from "express";
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
    const user_id = prediction.user_id;

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "no reult found" });
    }

    const reportData = await Reports.create({
      verdict: req.body.verdict,
      prediction_id: prediction._id,
    });

    user.reports.push(reportData._id);
    await user.save();

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


export const editreport = async (req: any, res: Response, next: NextFunction) => {
  try {
    const report = await Reports.findById(req.params.id)
    if(!report){
      return res.status(404).json({message: "no data found"})
    }

    report.verdict = req.body.verdict || report.verdict;
    const updatedReport = await report.save() 

    return res.status(200).json({ message: 'Report updated successfully', report: updatedReport })
  } catch (error) {
    next(error)
  }
}