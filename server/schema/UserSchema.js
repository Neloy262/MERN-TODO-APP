import mongoose from "mongoose";
import { todoSchema } from "./todoSchema.js";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  todos: [todoSchema],
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
