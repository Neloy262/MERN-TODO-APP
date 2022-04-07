import React, { useState } from "react";

function Todo(props) {
  const [id, setId] = useState(props.content._id);
  return (
    <div className="flex flex-row justify-between items-center w-[800px] border-2 bg-white mb-10 rounded-md p-2 shadow-sm">
      <div>
        <h2>{props.content.title}</h2>
      </div>

      <div className="flex flex-row gap-2">
        <button
          type="button"
          class="btn bg-blue-500"
          id={props.content._id}
          onClick={() => props.openModal(id)}
        >
          Update
        </button>
        <button
          type="button"
          class="btn bg-red-500"
          id={props.content._id}
          onClick={props.deleteData}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
