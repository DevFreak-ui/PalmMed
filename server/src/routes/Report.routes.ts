import express from "express";
const router = express.Router()
import auth from "../middlewares/auth";
import restrictAcsessTo from "../middlewares/restrictAccessTo";
import { allReport, createNewReport, editreport, findOneReport } from "../controllers/reports.controller";

router.post("/create/report/:id", auth, restrictAcsessTo("doctor"), createNewReport)
router.get("/all", auth, restrictAcsessTo("doctor"), allReport)
router.get("/:id", auth, restrictAcsessTo("doctor"), findOneReport)
router.patch("/edit/:id", auth, restrictAcsessTo("doctor"), editreport)

export default router;