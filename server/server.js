import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import { protect } from "./middleware/authMiddleware.js";
import aiRoutes from "./routes/aiRoutes.js";


connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("🚀 HireMind AI Backend is Running...");
});

app.get("/api/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to protected route!",
    userId: req.user.id,
  });
});

const PORT = process.env.PORT || 5000;

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR");
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
