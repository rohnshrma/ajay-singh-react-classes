import { FaTrashAlt } from "react-icons/fa";
const Note = ({ id, title, onDelete }) => {
  return (
    <div className="Note m-2 p-3  rounded border shadow-sm">
      <h3>{title}</h3>
      {/* <p>{description}</p> */}
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
