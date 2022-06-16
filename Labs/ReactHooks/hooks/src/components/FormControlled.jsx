// 1. IMPORT REACT
import React, { useState } from "react";
// 2. ADDITIONAL IMPORTS
// 3. CREATE COMPONENT
const FormControlled = () => {
  // Create state
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
  });
  // Create handle change function
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  // Create a function responsible for submitting our form
  const handleFormSubmit = (e) => {
    // Prevent the form from reloading our application
    e.preventDefault();
    console.log(formState);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="write name here"
        onChange={(e) => {
          return handleChange(e);
        }}
        value={formState.name}
      />
      <input
        type="number"
        name="age"
        placeholder="write age here"
        onChange={(e) => {
          return handleChange(e);
        }}
        value={formState.age}
      />
      <input type="submit" value="Submit Form" />
    </form>
  );
};
// 4. EXPORT COMPONENT
export default FormControlled;