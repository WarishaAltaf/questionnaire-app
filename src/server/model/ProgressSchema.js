import mongoose from "mongoose";

const ProgressSchema = new mongoose.Schema({
  step1: String,
  step2: {
    Comfort: String,
    Looks: String,
    Price: String,
  },
});

export default mongoose.model("Progress", ProgressSchema);
