import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(formData);
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
          name="title"
          className="form-control"
          placeholder="Task Title"
        />
        <input
          onChange={changeHandler}
          type="text"
          name="description"
          className="form-control"
          placeholder="Task Description"
        />
        <select className="form-select" name="status" onChange={changeHandler}>
          <option selected disabled>
            Select Status
          </option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button className="btn btn-dark">Add Task</button>
      </form>
    </div>
  );
};

export default CreateArea;
