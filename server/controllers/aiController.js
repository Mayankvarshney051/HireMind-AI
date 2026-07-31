import Resume from "../models/Resume.js";
import { analyzeResume } from "../services/aiService.js";

export const analyzeUserResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found.",
      });
    }

    if (!resume.resumeText || resume.resumeText.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Resume text not found.",
      });
    }

    const analysis = await analyzeResume(resume.resumeText);

    return res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
  console.error("AI Analysis Error:", error);

  return res.status(500).json({
    success: false,
    message: error.message,
  });
}
};