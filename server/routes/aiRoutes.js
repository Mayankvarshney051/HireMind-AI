import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { analyzeUserResume } from "../controllers/aiController.js";

const router = express.Router();

router.post("/analyze", protect, analyzeUserResume);

export default router;