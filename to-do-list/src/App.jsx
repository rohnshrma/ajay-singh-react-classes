import { useContext } from "react";
import Header from "./Components/Header";
import { useDispatch, useSelector } from "react-redux";

import {
  selectFilteredTasks,
  setFilter,
  fetchTasks,
} from "./store/taskSlice.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateArea from "./Components/CreateArea";
import NotesList from "./Components/NotesList.jsx";

const App = () => {
  const dispatch = useDispatch();
  const filteredTasks = useSelector(() => {
    selectFilteredTasks;
  });
  const status = useSelector((state) => state.tasks.status);

  return (
    <>
      <Header />
      <CreateArea />
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
      <main className="main">
        {filteredTasks.length > 0 ? (
          <NotesList />
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
