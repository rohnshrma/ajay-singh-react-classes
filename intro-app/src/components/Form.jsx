import { useState } from "react";

const Form = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData({
      user_name: "",
      email: "",
    });
    onUpdate(formData);
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          type="text"
          name="user_name"
          placeholder="Enter your name"
          className="form-control"
          value={formData.user_name}
        />
        <input
          onChange={changeHandler}
          type="email"
          name="email"
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
