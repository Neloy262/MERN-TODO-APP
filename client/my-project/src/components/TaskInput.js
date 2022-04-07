import axios from "axios";
import React, { useState } from "react";
import Todo from "./Todo";
function TaskInput(props) {
  const [text, setText] = useState("");

  const submitTodo = async () => {
    await axios.post("/todo", { title: text, id: props.userid });
    props.refresh();
  };

  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center w-[800px] border-2 mt-11 mb-11 p-[60px] rounded-md shadow-sm bg-white">
        <div>
          <h1>Task Manager</h1>
        </div>
        <div className="input-group mb-3 w-2/3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              console.log(typeof e.target.value);
              setText(e.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={submitTodo}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {props.todos.map((todo, i) => {
        return (
          <Todo
            content={todo}
            deleteData={props.deleteData}
            openModal={props.openModal}
            key={i}
          />
        );
      })}
    </>
  );
}

export default TaskInput;
