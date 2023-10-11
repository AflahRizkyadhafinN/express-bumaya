import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(express.json());

app.listen(5000, () => console.log("Server is running on port 5000"));
