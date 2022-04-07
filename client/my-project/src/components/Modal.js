import React, { useState } from "react";

function Modal(props) {
  const [updatedText, setText] = useState("");
  return (
    <div
      className={`bg-gray-900/80 w-screen h-screen ${props.view} justify-center items-center absolute animate-fade-in-down`}
    >
      <div className="w-[500px] border-2 p-10 bg-white rounded-md shadow-md">
        <div class="mb-3 flex flex-row justify-between">
          <h2>Update Todo</h2>
          <div onClick={props.close} className="hover:cursor-pointer">
            <h4>X</h4>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
          <button
            type="button"
            class="btn bg-blue-500 mt-9"
            onClick={() => props.updateData(updatedText)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
