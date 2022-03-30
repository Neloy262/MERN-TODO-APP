import express from "express";
import {
  getTodo,
  postTodo,
  deleteTodo,
  updateTodo,
} from "../controller/todoHandler.js";

import { register, login, getUserID } from "../controller/userHandler.js";

const todoRouter = express.Router();

// get all todo
todoRouter.get("/:id", getTodo);

// post a todo
todoRouter.post("/", postTodo);

// delete a todo
todoRouter.post("/delete", deleteTodo);

todoRouter.post("/update", updateTodo);

todoRouter.post("/register", register);

todoRouter.post("/login", login);

todoRouter.post("/getUser", getUserID);

export default todoRouter;
