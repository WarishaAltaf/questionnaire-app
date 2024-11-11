import express from "express";
import { postUserProgress } from "../controller/user.js";

const router = express.Router();

// Define the POST route for saving user progress
router.post("/progress", postUserProgress);

export default router;
