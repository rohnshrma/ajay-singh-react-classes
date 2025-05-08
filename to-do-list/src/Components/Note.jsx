import { FaCross } from "react-icons/fa";
const Note = ({ title, description }) => {
  return (
    <div className="Note m-2 p-3  rounded border shadow-sm">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>
        <FaCross />
      </button>
    </div>
  );
};

export default Note;
