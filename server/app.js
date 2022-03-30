import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.js";
import cors from "cors";

mongoose
  .connect(
    "mongodb+srv://Mahmud:1234@cluster0.zwpny.mongodb.net/Todo-DB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/todo", todoRouter);
// app.use(cors());

const port = 5000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
