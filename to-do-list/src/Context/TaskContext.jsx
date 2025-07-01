import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);

  const addTaskHandler = async (taskObj) => {
    try {
      const response = await axios.post(
        "https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json",
        taskObj
      );
      const newTaskObj = { id: response.data.name, ...taskObj };
      setToDoList((prevTasks) => {
        return [newTaskObj, ...prevTasks];
      });
    } catch (err) {
      setError(err);
    }
  };

  const deleteTaskHandler = async (taskObj) => {
    try {
      const response = await axios.post(
        "https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json",
        taskObj
      );
      const newTaskObj = { id: response.data.name, ...taskObj };
      setToDoList((prevTasks) => {
        return [newTaskObj, ...prevTasks];
      });
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json"
        );
        const data = response.data;

        var final_data = Object.keys(data).map((key) => {
          return { ...data[key], id: key };
        });

        console.log("final data", final_data);

        setToDoList(final_data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };

    fetchTasks();
  }, []);

  const deleteTaskHandler = async (delete_id) => {
    try {
      await axios.delete(
        `https://keeper-app-1199-default-rtdb.firebaseio.com/tasks/${delete_id}.json`
      );
      setToDoList((prevTask) => {
        console.log("updating state afte deletion");
        return prevTask.filter((task) => task.id !== delete_id);
      });
    } catch (err) {
      console.log("Delete Error", err);
      setError(err);
    }
  };
  const filteredTasks =
    filter === "all"
      ? toDoList
      : toDoList.filter((task) => task.status === filter);

  return (
    <TaskContext.Provider
      value={{
        toDoList,
        filteredTasks,
        filter,
        setFilter,
        addTaskHandler,
        deleteTaskHandler,
        error,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
