import { updateUserProfile } from "../controllers/users.controllers";

import express from "express";
import {
  createUser,
  login,
  forgotPassword,
  verifyToken,
  resetPassword,
} from "../controllers/users.controllers";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/register", createUser);
router.put("/profile", auth, updateUserProfile);

router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/verify/:token", verifyToken);

export default router;
