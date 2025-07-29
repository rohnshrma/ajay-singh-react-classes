import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(conn.connection.host);
  } catch (error) {
    console.error("Failed to connect to DB", error);
    process.exit(1);
  }
};

export default connectDB;
