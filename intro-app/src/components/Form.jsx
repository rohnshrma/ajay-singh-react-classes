import { useState } from "react";

const Form = ({ onUpdate }) => {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    onUpdate({
      heading: full_name,
      email: email,
    });
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
          value={full_name}
        />
        <input
          onChange={emailChangeHandler}
          type="email"
          name="email_address"
          placeholder="Enter your email"
          className="form-control"
          value={email}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
