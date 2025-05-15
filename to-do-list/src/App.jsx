import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import todoList from "./data.js";
import Note from "./Components/Note.jsx";
import { useState } from "react";
import CreateArea from "./Components/CreateArea";
const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTaskHandler = (taskObj) => {
    console.log(taskObj);
    setToDoList((prevTasks) => {
      return [taskObj, ...prevTasks];
    });
  };

  const deleteTaskHandler = (deleteIndex) => {
    setToDoList((prevTask) => {
      return prevTask.filter((task, index) => index !== deleteIndex);
    });
  };

  const filteredTasks =
    filter === "all"
      ? toDoList
      : toDoList.filter((task) => task.status === filter);

  console.log(filter);
  console.log(filteredTasks);

  return (
    <>
      <Header />
      <CreateArea onAdd={addTaskHandler} />

      <div
        id="filter"
        className="d-flex align-items-center justify-content-between"
      >
        <p>Filter :</p>
        <select
          className="form-select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all" selected>
            All Tasks
          </option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <main className="d-flex flex-wrap align-items-start justify-content-between">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((taskObj, index) => (
            <Note
              key={index}
              id={index}
              task={taskObj}
              onDelete={deleteTaskHandler}
            />
          ))
        ) : (
          <div className="Note m-2 p-3  rounded border shadow-sm">
            <p>No Items Added</p>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
