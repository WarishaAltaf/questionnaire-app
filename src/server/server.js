import mongoose from "mongoose";
import express from "express";
import next from "next";
import userRoutes from "./routes/user.js";

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
server.use(express.json());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
      console.log("MongoDB connection successful!");
      server.listen(process.env.PORT, (err) => {
        if (err) throw err;
        console.log(`Listening on http://localhost:${process.env.PORT}`);
      });
    }
    return true;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
server.use("/api/user", userRoutes);
app
  .prepare()
  .then(() => {
    server.all("*", (req, res) => {
      return handle(req, res);
    });
    connectDB();
  })
  .catch((e) => {
    console.log("error", e);
  });
