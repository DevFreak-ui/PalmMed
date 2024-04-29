import express from "express";
const router = express.Router()
import auth from "../middlewares/auth";
import restrictAcsessTo from "../middlewares/restrictAccessTo";
import { allReport, createNewReport, findOneReport } from "../controllers/Reports.controller";

router.post("/report/:id", auth, restrictAcsessTo("doctor"), createNewReport)
router.get("/reports/all", auth, restrictAcsessTo("doctor"), allReport)
router.get("/reports/:id", findOneReport)

export default router;