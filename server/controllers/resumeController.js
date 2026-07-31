import Resume from "../models/Resume.js";
import { extractTextFromPDF } from "../utils/pdfExtractor.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF.",
      });
    }

    const filePath = req.file.path;

    const resumeText = await extractTextFromPDF(filePath);

    const resumeUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const resume = await Resume.findOneAndUpdate(
      { user: req.user.id },
      {
        user: req.user.id,
        resumeUrl,
        originalName: req.file.originalname,
        resumeText,
      },
      {
        new: true,
        upsert: true,
      }
    );

    return res.status(201).json({
      success: true,
      message: "Resume uploaded successfully",
      resume,
    });
  } catch (error) {
    console.error("Resume Upload Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      success: true,
      resume,
    });
  } catch (error) {
    console.error("Get Resume Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};