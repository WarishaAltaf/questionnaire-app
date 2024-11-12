import mongoose from "mongoose";

const connectDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;
  return await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDatabase;
