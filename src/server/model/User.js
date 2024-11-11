import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  progress: {
    type: Object,
    required: true,
    default: {
      question1: String,
      question2: {
        Comfort: String,
        Looks: String,
        Price: String,
      },
    },
  },
  status: {
    type: String,
    enum: ["in-progress", "completed"],
    default: "in-progress",
  },
});

export default mongoose.model("User", UserSchema);
