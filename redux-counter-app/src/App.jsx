// Importing the App's CSS file for styling
import "./App.css";
// Importing the action creators from the CounterSlice
import { increment, decrement } from "./features/Counter/CounterSlice";
// Importing hooks from react-redux to interact with the Redux store
import { useSelector, useDispatch } from "react-redux";

// Defining the main App component
function App() {
  // useSelector hook extracts the counter value from the Redux store's state
  const count = useSelector((state) => state.counter.value);

  // useDispatch hook provides the dispatch function to send actions to the store
  const dispatch = useDispatch();

  // Rendering the UI
  return (
    // Empty fragment to group elements without adding extra DOM nodes
    <>
      // Displaying the counter value in a heading
      <h1>Redux Counter : {count}</h1>
      // Container div for styling the buttons
      <div className="container">
        // Button to increment the counter
        <button
          // onClick dispatches the increment action when clicked
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        // Button to decrement the counter
        <button
          // onClick dispatches the decrement action when clicked
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

// Exporting the App component as the default export
export default App;
