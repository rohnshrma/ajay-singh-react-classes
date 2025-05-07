// Importing the createRoot function from the React DOM library
// This is used to render React components into the DOM
import { createRoot } from "react-dom/client";

// Importing the App component from the "App" file
import App from "./App";

// Rendering the App component inside the HTML element with the ID "root"
// This is the entry point of the React application
createRoot(document.getElementById("root")).render(<App />);
