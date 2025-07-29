import mongoose from "mongoose"; // Import the mongoose library for MongoDB object modeling

// Define the schema for a User collection in MongoDB
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true }, // User's email, must be provided and unique
    password: { type: String, required: true }, // User's password, must be provided
    name: { type: String, required: true }, // User's name, must be provided
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Export the User model so it can be used in other files
export default mongoose.model("User", userSchema);
