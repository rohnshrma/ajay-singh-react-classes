import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

import Form from "./components/Form";

import Counter from "./components/Counter";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    user_name: "",
    email: "",
  });

  const updateHeading = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <Header text="Intro App" />
      <h2>{data.user_name}</h2>
      <p>{data.email}</p>
      <Form onUpdate={updateHeading} />
    </div>
  );
};
export default App;
