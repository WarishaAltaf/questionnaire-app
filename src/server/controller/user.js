import User from "../model/User.js";

export const postUserProgress = async (req, res) => {
  try {
    const { email, progress, status } = req.body;

    if (!email || !progress || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUserProgress = User.create({
      email,
      progress,
      status,
    });

    if (!newUserProgress) {
      return res.status(400).json({ message: "User progress not saved" });
    }

    res.status(201).json({
      message: "User progress saved successfully",
      data: newUserProgress,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving user progress", error: error.message });
  }
};
