// Importing the FaTrashAlt icon from react-icons for the delete button
import { FaTrashAlt } from "react-icons/fa";

// Defining the Note component, which accepts id, task, and onDelete props
// id: The index of the task for deletion
// task: The task object containing title, description, and status
// onDelete: Function to call when the delete button is clicked
const Note = ({ id, task, onDelete }) => {
  // Logging the task object for debugging
  console.log(task);

  // Destructuring the task object to get title, description, and status
  const { title, description, status } = task;

  // Returning the JSX to render a single task
  return (
    // A div representing a single task, styled with Bootstrap and custom classes
    <div className="Note m-2 p-3 rounded border shadow-sm">
      // Displaying the task title in a heading
      <h3>Title : {title}</h3>
      // Displaying the task description in a paragraph
      <p>Description : {description}</p>
      // Displaying the task status with a styled badge
      <p>
        Status : // Span for the status badge
        <span
          // Conditionally applying Bootstrap classes based on status
          // bg-danger for Pending (red), bg-success for Completed (green)
          className={`mx-2 badge ${
            status == "Pending" ? "bg-danger" : "bg-success"
          } `}
        >
          // Displaying the status text
          {status}
        </span>
      </p>
      // Delete button for the task
      <button
        // Bootstrap class for a red danger button
        className="btn btn-danger"
        // When clicked, call onDelete with the task's id
        onClick={() => {
          onDelete(id);
        }}
      >
        // Displaying the trash can icon
        <FaTrashAlt />
      </button>
    </div>
  );
};

// Exporting the Note component for use in App.jsx
export default Note;
