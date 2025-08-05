// Import React library, necessary to use React features
import React from "react";

// Define the Calculation component, memoized using React.memo to avoid unnecessary re-renders
const Calculation = React.memo(({ calculate }) => {
  // Log to console whenever this component renders (to track renders)
  console.log("Calculation component rendered");

  // Render a div showing the result of the expensive calculation by calling the passed calculate function
  return <div>Expensive Calculation Result : {calculate()}</div>;
});

// Export the Calculation component as the default export of this module
export default Calculation;
