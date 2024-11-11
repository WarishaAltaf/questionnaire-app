"use client";
import { QuestionsView } from "./Questions.view";
import { withAuth } from "@/utils/auth/withAuth";

export default withAuth(QuestionsView);
