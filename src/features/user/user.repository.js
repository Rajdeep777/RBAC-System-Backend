import mongoose from "mongoose";
import userSchema from "./user.schema.js";
import ApplicationError from "../../../error-handler/applicationError.js";
// Creating model from user schema
const UserModel = mongoose.model("User", userSchema);
class UserRepository {
  async register(user) {
    try {
      // Create instance of model
      const newUser = new UserModel(user);
      await newUser.save();
      return newUser;
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        throw error;
      } else {
        throw new ApplicationError("Something went wrong with database", 500);
      }
    }
  }
  async login(email, password) {
    try {
      return await UserModel.findOne({ email, password });
    } catch (error) {
      throw new ApplicationError("Somthing went wrong with database", 500);
    }
  }
  async findByEmail(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw new ApplicationError("Somthing went wrong with database", 500);
    }
  }
}
export default UserRepository;
