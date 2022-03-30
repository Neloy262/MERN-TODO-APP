import React from "react";

function Todo(props) {
  return (
    <div className="flex flex row border-2 w-[800px] bg-white mb-10 rounded-md p-2 shadow-sm">
      <h2>{props.content.title}</h2>
      <button id={props.content._id} onClick={props.deleteData}>
        delete
      </button>
    </div>
  );
}

export default Todo;
