import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import todoList from "./data.js";
import Note from "./Components/Note.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="d-flex flex-wrap align-items-start justify-content-between">
        {todoList.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
          />
        ))}
      </main>
    </>
  );
};

export default App;
