import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const uri: string = process.env.MONGO_URI!;
    // Connect the client to the server (optional starting in v4.7)
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (e: any) {
    console.log(`Something went wrong with mongo connection: ${e}`);
  }
};

export default connectDB;
