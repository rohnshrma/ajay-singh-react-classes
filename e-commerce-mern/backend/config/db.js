import mongoose from "mongoose"; // Import the mongoose library to interact with MongoDB

// Define an asynchronous function to connect to the database
const connectDB = async () => {
  try {
    // Try to connect to MongoDB using the connection string from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // If successful, log the host name of the connected database
    console.log(conn.connection.host);
  } catch (error) {
    // If there is an error, log a message and the error details
    console.error("Failed to connect to DB", error);
    // Exit the process with a failure code (1)
    process.exit(1);
  }
};

// Export the connectDB function so it can be used in other files
export default connectDB;
