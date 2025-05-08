import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Counter from "./components/Counter";
const App = () => {
  console.log("App rerendered");
  return (
    <div className="App">
      <Header text="Intro App" />
      <Counter />
    </div>
  );
};

export default App;
