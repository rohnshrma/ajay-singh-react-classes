import React, { useReducer , useContext} from "react";
import { TaskContext } from "../Context/TaskContext";

const initialState = {
  title: "",
  description: "",
  status: "Pending",
};

const reducerFn = (state, action) => {
  if (action.type === "update") {
    return {
      ...state,
      [action.input_name]: action.payload,
    };
  } else if (action.type === "reset") {
    return {
      title: "",
      description: "",
      status: "pending",
    };
  } else {
    return state;
  }
};

const CreateArea = () => {
  const {addTaskHandler} = useContext(TaskContext)
  const [formData, dispatch] = useReducer(reducerFn, initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "update", payload: value, input_name: name });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "reset" });
    addTaskHandler(formData);
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
          value={formData.title}
        />
        <input
          onChange={changeHandler}
          type="text"
          name="description"
          className="form-control"
          placeholder="Task Description"
          value={formData.description}
        />
        <select
          value={formData.status}
          className="form-select"
          name="status"
          onChange={changeHandler}
        >
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
