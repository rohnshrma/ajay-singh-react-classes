// Importing StrictMode from React to enable additional checks and warnings in development
import { StrictMode } from "react";
// Importing createRoot from React DOM to render the React app into the DOM
import { createRoot } from "react-dom/client";
// Importing the global CSS file for styling
import "./index.css";
// Importing the main App component
import App from "./App.jsx";
// Importing Provider from react-redux to connect the Redux store to the React app
import { Provider } from "react-redux";
// Importing the configured Redux store
import { store } from "./store.js";

// Creating a root for rendering the React app into the DOM element with id="root"
createRoot(document.getElementById("root")).render(
  // StrictMode enables extra checks for potential issues in development mode
  <StrictMode>
    {/* Provider makes the Redux store available to all components in the app */}
    <Provider store={store}>
      {/* The main App component, which contains the app's UI and logic */}
      <App />
    </Provider>
  </StrictMode>
);
