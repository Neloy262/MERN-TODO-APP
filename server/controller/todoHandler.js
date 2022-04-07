import { todoModel } from "../schema/todoSchema.js";
import UserModel from "../schema/UserSchema.js";
const getTodo = async (req, res) => {
  try {
    const User = await UserModel.find({ _id: req.params.id });

    const todos = User[0].todos;
    res.send(todos);
  } catch (err) {
    console.log(err);
  }
};

const postTodo = async (req, res) => {
  try {
    const User = await UserModel.find({ _id: req.body.id });

    User[0].todos.push({ title: req.body.title });
    await User[0].save();
    res.send("Todo added");
  } catch (err) {
    console.log(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    const User = await UserModel.find({ _id: req.body.user_id });
    const todo = await User[0].todos.id(req.body.todo_id);

    todo.title = req.body.title;

    await User[0].save();

    res.send("Todo updated");
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const User = await UserModel.find({ _id: req.body.user_id });
    User[0].todos.id(req.body.todo_id).remove();

    await User[0].save();
    res.send("Todo deleted");
  } catch (err) {
    console.log(err);
  }
};

export { getTodo, postTodo, deleteTodo, updateTodo };
