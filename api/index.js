import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import trialsRoute from "./routes/trials.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";


const app = express();
dotenv.config();
const __dirname = path.resolve();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected")
})


app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/trials", trialsRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Error";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log("Connected to Backend")
})
