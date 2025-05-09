// Importing the useState hook from React to manage state
import { useState } from "react";

// Defining the Form functional component, which receives 'onUpdate' as a prop
const Form = ({ onUpdate }) => {
  // Declaring a state variable 'full_name' with an initial empty string value, and 'setName' as its setter function
  const [full_name, setName] = useState("");

  // Defining a function to handle input changes
  const changeHandler = (e) => {
    // Updating the 'full_name' state with the current value of the input field
    setName(e.target.value);
  };

  // Defining a function to handle form submission
  const submitHandler = (e) => {
    // Preventing the default form submission behavior (e.g., page refresh)
    e.preventDefault();
    // Calling the 'onUpdate' prop function, passing the current 'full_name' state value
    onUpdate(full_name);
  };

  // Returning the JSX to render the component
  return (
    // Root div to contain the form
    <div>
      // Defining a form element with a className of "form" and attaching the
      submitHandler to the onSubmit event
      <form className="form" onSubmit={submitHandler}>
        // Input field for text entry
        <input
          // Attaching the changeHandler to the onChange event to update state on input
          onChange={changeHandler}
          // Setting the input type to text
          type="text"
          // Setting the name attribute for form accessibility
          name="full_name"
          // Placeholder text to guide the user
          placeholder="Enter your name"
          // Applying Bootstrap's form-control class for styling
          className="form-control"
        />
        // Submit button to trigger form submission
        <button>Submit</button>
      </form>
    </div>
  );
};

// Exporting the Form component as the default export
export default Form;
