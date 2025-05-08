// Defining the Header component as a JavaScript function
// A React component is a function that returns JSX (HTML-like syntax for React)
const Header = (props) => {
  // Logging the props object to the console for debugging purposes
  console.log("props", props);

  // Destructuring the "text" property from the props object
  const { text } = props;

  // Creating a variable "date" that stores the current date in a readable format
  const date = new Date().toLocaleDateString();

  // The return statement specifies what the component will render on the screen
  return (
    // Rendering an h1 element that displays the "text" prop and the current date
    <h1 className="text-center bg-danger text-light p-3 mb-3">
      {text} : {date}
    </h1>
  );
};

// Exporting the Header component so it can be used in other parts of the application
export default Header;
