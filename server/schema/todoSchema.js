import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: String,
    default: false,
  },
});

const todoModel = mongoose.model("todo", todoSchema);

export { todoModel, todoSchema };
