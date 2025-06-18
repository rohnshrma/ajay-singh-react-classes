import React,{useContext} from "react";
import Note from "./Note";
import { TaskContext } from "../Context/TaskContext";
const NotesList = () => {
const {filteredTasks , deleteTaskHandler} = useContext(TaskContext)

    return (
    <div className="notes_list d-flex flex-wrap align-items-start justify-content-between">
      {filteredTasks.map((taskObj) => (
        <Note
          key={taskObj.id}
          id={taskObj.id}
          task={taskObj}
          onDelete={deleteTaskHandler}
        />
      ))}
    </div>
  );
};

export default NotesList;
