import { createClient } from "./client";

const supabase = await createClient();

export const getUserDataByEmail = async (email) => {
  try {
    const { data, error } = await supabase
      .from("user_progress")
      .select("status, progress, email")
      .eq("email", email)
      .single();

    if (error) {
      console.log("Supabase error fetching user data:", error.message);
      throw error;
    }
    return data;
  } catch (error) {
    console.log("Error fetching user data:", error);
    return null;
  }
};

export const addInitialUserData = async (email) => {
  try {
    const { data, error } = await supabase.from("user_progress").insert([
      {
        email: email,
        progress: {},
        status: "in-progress",
      },
    ]);

    if (error) {
      console.log("Supabase error adding user data:", error.message);
      throw error;
    }
    console.log("User data added:", data);
    return data;
  } catch (error) {
    console.log("Error adding user data:", error);
    return null;
  }
};

export const addUserProgressData = async ({ email, progressData, status }) => {
  try {
    const { error } = await supabase
      .from("user_progress")
      .update({ progress: progressData, status: status })
      .eq("email", email);

    if (error) {
      console.log("Supabase error updating progress:", error.message);
      throw error;
    }

    return true;
  } catch (error) {
    console.log("Error updating user progress data:", error);
    return false;
  }
};
