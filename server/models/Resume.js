import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeUrl: {
      type: String,
      required: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    resumeText: {
      type: String,
      default: "",
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resume", resumeSchema);