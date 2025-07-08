// Importing configureStore from Redux Toolkit to create the Redux store
import { configureStore } from "@reduxjs/toolkit";
// Importing the counter reducer from the CounterSlice file
import counterReducer from "./features/Counter/CounterSlice";

// Creating the Redux store with configureStore
export const store = configureStore({
  // The reducer object combines all slice reducers
  reducer: {
    // Assigning the counter reducer to the "counter" key in the store's state
    counter: counterReducer,
  },
});
