// Importing the Header component from the "components" folder
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
// Defining the App component as a JavaScript function
// A React component is a function that returns JSX (HTML-like syntax for React)
const App = () => {
  const getData = (data) => {
    console.log("im inside of app.js", data);
  };

  // The return statement specifies what the component will render on the screen
  return (
    // A div element with a class name "App" to group the content
    <div className="App">
      <Form onGet={getData} />
      {/* Using the Header component and passing a prop called "text" with the value "Hello world" */}
      <Header text="Hello world" />
      {/* Using the Header component again with a different "text" prop value */}
      <Header text="bye world" />
      {/* A paragraph element containing some placeholder text (Lorem Ipsum) */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
        consectetur earum illo adipisci amet reprehenderit ipsum excepturi nihil
        et eveniet nemo! Quos laboriosam, doloremque optio animi nisi quod
        laborum necessitatibus atque est incidunt labore odio illum dolor maxime
        possimus quisquam alias voluptatem. Blanditiis accusamus quis labore
        ipsum doloremque minima cupiditate consequuntur, tempore cum facere
        aliquid numquam. Fugit consectetur dolorum quaerat repudiandae nostrum
        consequatur, facilis molestiae sequi porro explicabo optio, aut veniam
        iusto eligendi incidunt nihil culpa qui numquam quisquam, maxime at non
        atque vel? Delectus architecto, dignissimos nobis nulla illum et magni
        totam omnis magnam, reprehenderit consectetur voluptatum, non repellat.
      </p>
    </div>
  );
};

// Exporting the App component so it can be used in other parts of the application
export default App;
