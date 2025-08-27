import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"]
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 2000,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);