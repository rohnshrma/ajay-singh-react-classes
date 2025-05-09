// Importing the Header component from the specified path
import Header from "./components/Header";

// Importing Bootstrap's CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Importing the Form component from the specified path
import Form from "./components/Form";

// Importing the Counter component (though it's not used in this code)
import Counter from "./components/Counter";

// Importing the useState hook from React to manage state
import { useState } from "react";

// Defining the main App functional component
const App = () => {
  // Declaring a state variable 'heading' with an initial empty string value, and 'setHeading' as its setter function
  const [heading, setHeading] = useState("");

  // Defining a function to update the 'heading' state with a new value
  const updateHeading = (heading) => {
    setHeading(heading); // Updates the 'heading' state with the provided value
  };

  // Returning the JSX to render the component
  return (
    // Root div with a className of "App" for styling or identification
    <div className="App">
      // Rendering the Header component with a prop 'text' set to "Intro App"
      <Header text="Intro App" />
      // Displaying the current value of the 'heading' state in an h1 element
      <h1>{heading}</h1>
      // Rendering the Form component and passing the 'updateHeading' function
      as a prop named 'onUpdate'
      <Form onUpdate={updateHeading} />
    </div>
  );
};

// Exporting the App component as the default export
export default App;
