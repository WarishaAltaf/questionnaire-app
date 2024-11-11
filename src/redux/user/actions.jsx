"use client";
import { completedProgressAPI } from "@/utils/apis";
import {
  addInitialUserData,
  addUserProgressData,
  getUserDataByEmail,
} from "@/utils/supabase/actions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserDetails = createAsyncThunk(
  "user/gettUserDetails",
  async (email, { rejectWithValue }) => {
    try {
      let data = await getUserDataByEmail(email);
      if (!data || data === null) {
        await addInitialUserData(email);
        data = await getUserDataByEmail(email);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error || "An error occurred");
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async ({ email, progressData, status }, { rejectWithValue }) => {
    try {
      let data = await addUserProgressData({ email, progressData, status });
      if (data) {
        data = await getUserDataByEmail(email);
        if (status === "completed") {
          console.log("emai", progressData, status, email);
          const response = await completedProgressAPI({
            email,
            progress: progressData,
            status,
          });
          if (response.status !== 201) {
            return rejectWithValue("Error saving user progress");
          }
        }
      }
      return data;
    } catch (error) {
      return rejectWithValue(
        error || error?.reponse?.data?.message || "An error occurred"
      );
    }
  }
);
