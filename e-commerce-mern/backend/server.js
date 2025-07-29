import express from "express"; // Import the Express framework for building web servers
import cors from "cors"; // Import CORS middleware to handle cross-origin requests
import connectDB from "./config/db.js"; // Import custom function to connect to the database
import authRoutes from "./routes/auth.js"; // Import authentication-related routes
import { config } from "dotenv"; // Import dotenv to load environment variables from a .env file

config(); // Load environment variables from .env file into process.env

const app = express(); // Create an Express application instance

connectDB(); // Establish a connection to the database

// middleware
app.use(cors({ origin: "*" })); // Enable CORS for all origins (allow any domain to access the API)
app.use(express.json()); // Parse incoming JSON requests and put the parsed data in req.body

// routes
app.use("/api/auth", authRoutes); // Mount authentication routes at /api/auth

const PORT = process.env.PORT || 3010; // Set the server port from environment or default to 3010
app.listen(PORT, () => {
  console.log("Server running on port ", PORT); // Start the server and log the port it's running on
});
