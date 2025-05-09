import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [text, setText] = useState("");
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(text);
  };
  return (
    <div className="create-area p-3 rounded bg-light shadow-lg">
      <form
        onSubmit={submitHandler}
        className="d-flex align-items-center justify-content-between"
      >
        <input
          onChange={changeHandler}
          type="text"
          name="task"
          className="form-control"
          placeholder="Enter Task Name..."
        />
        <button className="btn btn-dark">Add Task</button>
      </form>
    </div>
  );
};

export default CreateArea;
