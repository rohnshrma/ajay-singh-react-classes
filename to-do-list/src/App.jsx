import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import todoList from "./data.js";
import Note from "./Components/Note.jsx";
import { useState } from "react";
import CreateArea from "./Components/CreateArea";
const App = () => {
  const [toDoList, setToDoList] = useState([]);

  const addTaskHandler = (taskName) => {
    console.log(taskName);
    setToDoList((prevTasks) => {
      return [taskName, ...prevTasks];
    });
  };

  const deleteTaskHandler = (deleteIndex) => {
    setToDoList((prevTask) => {
      return prevTask.filter((task, index) => index !== deleteIndex);
    });
  };

  return (
    <>
      <Header />
      <CreateArea onAdd={addTaskHandler} />
      <main className="d-flex flex-wrap align-items-start justify-content-between">
        {toDoList.length > 0 ? (
          toDoList.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note}
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
