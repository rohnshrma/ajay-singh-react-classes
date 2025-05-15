// Importing React and useState hook to manage form data
import React, { useState } from "react";

// Defining the CreateArea component, which accepts an onAdd prop
// onAdd is a function passed from App.jsx to handle adding new tasks
const CreateArea = ({ onAdd }) => {
  // Creating a state variable 'formData' to store the form input values
  // Initially, title and description are empty, and status is "Pending"
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  // Defining a function to handle changes in form inputs
  const changeHandler = (e) => {
    // Extracting the name and value of the input field that triggered the event
    const { name, value } = e.target;

    // Updating formData by spreading the previous data and updating the changed field
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // Defining a function to handle form submission
  const submitHandler = (e) => {
    // Preventing the default form submission (which would refresh the page)
    e.preventDefault();

    // Calling the onAdd prop function, passing the current formData
    // This sends the new task to the App component
    onAdd(formData);
  };

  // Returning the JSX to render the form
  return (
    // A div to contain the form, styled with Bootstrap and custom classes
    <div className="create-area p-3 rounded bg-light shadow-lg">
      // Form element with submitHandler called on submission
      <form
        onSubmit={submitHandler}
        // Bootstrap classes for flexbox layout (aligns inputs horizontally)
        className="d-flex align-items-center justify-content-between"
      >
        // Input field for the task title
        <input
          // When the input changes, call changeHandler to update formData
          onChange={changeHandler}
          // Type is text for a single-line input
          type="text"
          // Name matches the key in formData (used in changeHandler)
          name="title"
          // Bootstrap class for styling
          className="form-control"
          // Placeholder text to guide the user
          placeholder="Task Title"
        />
        // Input field for the task description
        <input
          // When the input changes, call changeHandler to update formData
          onChange={changeHandler}
          // Type is text for a single-line input
          type="text"
          // Name matches the key in formData
          name="description"
          // Bootstrap class for styling
          className="form-control"
          // Placeholder text to guide the user
          placeholder="Task Description"
        />
        // Dropdown menu to select task status
        <select
          // Bootstrap class for styling
          className="form-select"
          // Name matches the key in formData
          name="status"
          // When the selection changes, call changeHandler
          onChange={changeHandler}
        >
          // Default option (disabled so it can't be re-selected)
          <option selected disabled>
            Select Status
          </option>
          // Option for Pending status
          <option value="Pending">Pending</option>
          // Option for Completed status
          <option value="Completed">Completed</option>
        </select>
        // Submit button to add the task
        <button
          // Bootstrap classes for a dark-themed button
          className="btn btn-dark"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

// Exporting the CreateArea component for use in App.jsx
export default CreateArea;
