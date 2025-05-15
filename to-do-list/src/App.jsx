// Importing the Header component to display the title of the app
import Header from "./Components/Header";

// Importing Bootstrap's CSS for styling (e.g., buttons, forms, layout)
import "bootstrap/dist/css/bootstrap.min.css";

// Importing custom CSS for additional styling specific to the app
import "./App.css";

// Importing the Note component to display individual tasks
import Note from "./Components/Note.jsx";

// Importing useState hook from React to manage state (data) in the component
import { useState } from "react";

// Importing the CreateArea component to allow users to add new tasks
import CreateArea from "./Components/CreateArea";

// Defining the main App component as a functional component
const App = () => {
  // Creating a state variable 'toDoList' to store the list of tasks
  // Initially, it's an empty array
  // setToDoList is the function to update toDoList
  const [toDoList, setToDoList] = useState([]);

  // Creating a state variable 'filter' to track the current filter ("all", "Pending", or "Completed")
  // Initially set to "all" to show all tasks
  const [filter, setFilter] = useState("all");

  // Defining a function to handle adding a new task
  // taskObj is the new task object passed from CreateArea component
  const addTaskHandler = (taskObj) => {
    // Logging the taskObj to the console for debugging
    console.log(taskObj);

    // Updating toDoList by adding the new task at the beginning of the array
    // Using the spread operator (...prevTasks) to keep existing tasks
    setToDoList((prevTasks) => {
      return [taskObj, ...prevTasks];
    });
  };

  // Defining a function to handle deleting a task
  // deleteIndex is the index of the task to be deleted
  const deleteTaskHandler = (deleteIndex) => {
    // Updating toDoList by filtering out the task at deleteIndex
    // Only keep tasks where the index does not match deleteIndex
    setToDoList((prevTask) => {
      return prevTask.filter((task, index) => index !== deleteIndex);
    });
  };

  // Creating a filtered list of tasks based on the 'filter' state
  // If filter is "all", show all tasks
  // Otherwise, show only tasks matching the filter status (e.g., "Pending" or "Completed")
  const filteredTasks =
    filter === "all"
      ? toDoList
      : toDoList.filter((task) => task.status === filter);

  // Logging the current filter value for debugging
  console.log(filter);

  // Logging the filtered tasks for debugging
  console.log(filteredTasks);

  // Returning the JSX (HTML-like syntax) to render the UI
  return (
    // Empty tags (<>) are a React Fragment, used to group elements without adding extra HTML
    <>
      {/* // Rendering the Header component (displays "To Do List" title) */}
      <Header />
      {/* // Rendering the CreateArea component and passing addTaskHandler as a prop */}
      {/* // This allows CreateArea to call addTaskHandler when a new task is added */}
      <CreateArea onAdd={addTaskHandler} />
      {/* // A div containing the filter dropdown menu */}
      <div
        // id for potential CSS or JavaScript targeting
        id="filter"
        // Bootstrap classes for flexbox layout (aligns items horizontally and spaces them)
        className="d-flex align-items-center justify-content-between"
      >
        {/* // A paragraph label for the filter dropdown */}
        <p>Filter :</p>
        {/* // A dropdown menu (select) to choose the filter type */}
        <select
          // Bootstrap class to style the dropdown
          className="form-select"
          // When the user selects an option, update the filter state with the selected value
          onChange={(e) => setFilter(e.target.value)}
        >
          {/* // Option to show all tasks (default selected) */}
          <option value="all" selected>
            All Tasks
          </option>
          {/* // Option to show only Pending tasks */}
          <option value="Pending">Pending</option>
          {/* // Option to show only Completed tasks */}
          <option value="Completed">Completed</option>
        </select>
      </div>
      {/* // The main section where tasks are displayed */}
      <main
        // Bootstrap classes for a flexible, wrapping layout
        className="d-flex flex-wrap align-items-start justify-content-between"
      >
        {/* // Conditionally rendering tasks or a "No Items Added" message // If
        filteredTasks has at least one task, map over it to render Note
        components */}
        {filteredTasks.length > 0 ? (
          // Mapping over filteredTasks to create a Note component for each task
          filteredTasks.map((taskObj, index) => (
            // Rendering the Note component
            // key: Unique identifier for React to track elements (using index)
            // id: Passed to Note for deletion purposes
            // task: The task object (contains title, description, status)
            // onDelete: Passing deleteTaskHandler to allow Note to delete the task
            <Note
              key={index}
              id={index}
              task={taskObj}
              onDelete={deleteTaskHandler}
            />
          ))
        ) : (
          // If no tasks exist, display a placeholder message
          <div className="Note m-2 p-3 rounded border shadow-sm">
            <p>No Items Added</p>
          </div>
        )}
      </main>
    </>
  );
};

// Exporting the App component so it can be used in other files (e.g., index.js)
export default App;
