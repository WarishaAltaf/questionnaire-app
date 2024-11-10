import { createClient } from "./client";

const supabase = await createClient();

export const getUserDataByEmail = async (email) => {
  try {
    const { data, error } = await supabase
      .from("user_progress")
      .select("status, progress")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const addInitialUserData = async (email) => {
  try {
    const { error, data } = await supabase.from("user_progress").insert([
      {
        email: email,
        progress: {},
        status: "in-progress",
      },
    ]);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error adding user data:", error);
    return null;
  }
};

export const addUserProgressData = async (email, progressData, status) => {
  try {
    const { error } = await supabase
      .from("user_progress")
      .update({ progress: progressData, status: status })
      .eq("email", email);

    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error("Error updating user progress data:", error);
    return false;
  }
};
