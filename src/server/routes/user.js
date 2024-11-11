import express from "express";
import { postUserProgress } from "../controller/user.js";

const router = express.Router();

router.post("/progress", postUserProgress);

export default router;
