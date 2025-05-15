// Defining the Header component to display the app's title
const Header = () => {
  // Returning the JSX to render the header
  return (
    // A div styled with Bootstrap for a dark background and light text
    <div className="text-center bg-dark text-light px-5 py-2">
      {/* Displaying the title "To Do List" in a heading */}
      <h1 className="fs-2">To Do List</h1>
    </div>
  );
};

// Exporting the Header component for use in App.jsx
export default Header;
