import React from "react";
import { createRoot } from "react-dom/client";
import { NewProductContextProvider } from "./Context/NewProductContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <NewProductContextProvider>
    <App />
  </NewProductContextProvider>
);
