// Import React hooks for managing state and memoizing functions
import { useCallback, useState } from "react";

// Import a Header component (not used in JSX here though)
import Header from "./components/Header";

// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import a Calculation component, which likely uses a calculation function passed as prop
import Calculation from "./components/Calculation";

// Define the main functional component App
const App = () => {
  // Declare a state variable 'count' initialized to 0, and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  // Declare a state variable 'theme' initialized to "light" and a setter 'setTheme'
  const [theme, setTheme] = useState("light");

  // Memoize an expensive calculation function that re-runs only when 'count' changes
  const expCal = useCallback(() => {
    console.log("Running Expensive Calculation...");

    // Initialize a result accumulator
    let result = 0;

    // Loop 1 million times adding a random scaled by count to result
    for (let i = 0; i < 1000000; i++) {
      result += count * Math.random();
    }

    // Return the floor of the accumulated result (an integer)
    return Math.floor(result);
  }, [count]); // Dependency array ensures this function updates if 'count' changes

  // Memoize a function to toggle the theme between light and dark
  const toggleTheme = useCallback(() => {
    console.log("Changing theme");

    // Update theme based on previous state: toggle between "light" and "dark"
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []); // Empty dependency array means this function is created once on mount

  // Memoize a function to increment the count state by one
  const incrementCount = useCallback(() => {
    console.log("increment running");

    // Update count by adding 1 to previous count
    setCount((prevCount) => prevCount + 1);
  }, []); // Also only created once, does not depend on outside variables

  // Create a styles object whose colors depend on the current theme
  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333", // white bg for light, dark bg for dark
    color: theme === "light" ? "#333" : "#fff", // dark text for light bg, white text for dark bg
    padding: "2rem", // consistent padding around content
  };

  // Return JSX for rendering the UI
  return (
    <div className="App" style={styles}>
      {/* Display current theme */}
      <h2>Current theme : {theme}</h2>

      {/* Display current count */}
      <h2>Count: {count}</h2>

      {/* Button to toggle theme, calls memoized toggleTheme function */}
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* Button to increment count, calls memoized incrementCount function */}
      <button onClick={incrementCount}>Increment Count</button>

      {/* Render Calculation component, passing expCal function as a prop named 'calculate' */}
      <Calculation calculate={expCal} />
    </div>
  );
};

// Export the App component as the default export of this module
export default App;
