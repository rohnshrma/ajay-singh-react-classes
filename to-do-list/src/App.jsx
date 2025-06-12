import Header from "./Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import "./App.css";

import Note from "./Components/Note.jsx";

import { useEffect, useState } from "react";

import CreateArea from "./Components/CreateArea";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);

  const addTaskHandler = async (taskObj) => {
    try{
      const response = await axios.post("https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json" , taskObj)
      const newTaskObj = {id : response.data.name , ...taskObj}
          setToDoList((prevTasks) => {
            return [newTaskObj, ...prevTasks];
          });
    }catch(err){
      setError(err)
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json"
        );
        const data = response.data;

        var final_data = Object.keys(data).map((key)=>{
          return {...data[key], id : key}
        })

        console.log("final data",final_data)
       
        setToDoList(final_data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };

    fetchTasks();
  },[]);

  const deleteTaskHandler = (deleteIndex) => {
    setToDoList((prevTask) => {
      return prevTask.filter((task, index) => index !== deleteIndex);
    });
  };
  const filteredTasks =
    filter === "all"
      ? toDoList
      : toDoList.filter((task) => task.status === filter);


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
          <div className="Note m-2 p-3 rounded border shadow-sm">
            <p>No Items Added</p>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
