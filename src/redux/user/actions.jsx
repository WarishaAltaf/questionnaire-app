"use client";
import {
  addInitialUserData,
  getUserDataByEmail,
} from "@/utils/supabase/actions";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserDetails = createAsyncThunk(
  "user/gettUserDetails",
  async (email, { rejectWithValue }) => {
    try {
      let data = await getUserDataByEmail(email);
      if (!data) {
        data = await addInitialUserData(email);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error || "An error occurred");
    }
  }
);
