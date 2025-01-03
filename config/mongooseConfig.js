import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.DB_URL;
const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected !!!");
  } catch (error) {
    console.log(error);
    console.log("Error while connecting to DB");
  }
};
export default connectUsingMongoose;
