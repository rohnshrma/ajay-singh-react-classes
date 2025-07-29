import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import { config } from "dotenv";

config();

const app = express();

connectDB();

// middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
