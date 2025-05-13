import { useState } from "react";

const Form = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const nameChangeHandler = (e) => {
    const nameText = e.target.value;

    setFormData((prevData) => {
      return {
        name: nameText,
        email: prevData.email,
      };
    });
  };
  const emailChangeHandler = (e) => {
    const emailText = e.target.value;
    setFormData((prevData) => {
      return {
        name: prevData.name,
        email: emailText,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
    });
    onUpdate(formData);
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <input
          onChange={nameChangeHandler}
          type="text"
          name="full_name"
          placeholder="Enter your name"
          className="form-control"
          value={formData.name}
        />
        <input
          onChange={emailChangeHandler}
          type="email"
          name="email_address"
          placeholder="Enter your email"
          className="form-control"
          value={formData.email}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
