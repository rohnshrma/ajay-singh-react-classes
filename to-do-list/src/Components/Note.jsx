import { FaTrashAlt } from "react-icons/fa";
const Note = ({ id, task, onDelete }) => {
  console.log(task);

  const { title, description, status } = task;
  return (
    <div className="Note m-2 p-3  rounded border shadow-sm">
      <h3>Title : {title}</h3>
      <p>Description : {description}</p>
      <p>
        Status :
        <span
          className={`mx-2 badge ${
            status == "Pending" ? "bg-danger" : "bg-success"
          } `}
        >
          {status}
        </span>
      </p>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(id);
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Note;
