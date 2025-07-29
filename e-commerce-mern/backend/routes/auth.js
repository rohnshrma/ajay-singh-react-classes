// Import the Router function from express to create modular route handlers
import { Router } from "express";
// Import bcryptjs for securely hashing and comparing passwords
import bcrypt from "bcryptjs";
// Import jsonwebtoken for creating and verifying JWT tokens
import jwt from "jsonwebtoken";
// Import the User model to interact with the users collection in the database
import User from "../models/User.js";

// Create a new router instance to define routes
const router = Router();

// Define a POST route for user registration
router.post("/register", async (req, res) => {
  try {
    // Extract name, email, and password from the request body
    const { name, email, password } = req.body;

    // Check if a user with the given email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // If user exists, send a 400 Bad Request response with a message
      return res.status(400).json({ message: "User already exisits" });
    }

    // Hash the user's password with a salt round of 10 for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the provided name, email, and hashed password
    const user = new User({ name, email, password: hashedPassword });

    // Save the new user to the database
    await user.save();

    // Generate a JWT token containing the user's ID, valid for 1 hour
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send a 201 Created response with the token and user info (excluding password)
    res.status(201).json({ token, user: { id: user._id, name, email } });
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Define a POST route for user login
router.post("/login", async (req, res) => {
  try {
    // Extract email and password from the request body
    const { email, password } = req.body;

    // Find the user in the database by email
    const user = await User.findOne({ email });
    if (!user) {
      // If user is not found, send a 404 Not Found response
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // If passwords do not match, send a 400 Bad Request response
      return res.status(400).json({ message: "Invalid Password" });
    }

    // Generate a JWT token containing the user's ID, valid for 1 hour
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send a response with the token and user info (excluding password)
    res.json({ token, user: { id: user._id, name: user.name, email } });
  } catch (err) {
    // If an error occurs, send a 400 Bad Request response
    res.status(400).json({ message: "Server error", error: err });
  }
});

// Export the router to be used in other parts of the application
export default router;
