import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => console.log("DB connected"));

if (process.env.NODE_ENV != "production") {
  console.log("In development mode");
}

app.listen(process.env.PORT, () => {
  console.log("Server listening on port 3040");
});
