export const getUserDetails = createAsyncThunk(
  "user/gettUserDetails",
  async (_, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(error || "An error occurred");
    }
  }
);
