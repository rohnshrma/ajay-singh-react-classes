const Form = (props) => {
  const { onGet } = props;
  var data = {
    name: "ajay singh",
  };
  console.log(data);

  const handleClick = () => {
    onGet("helloworld");
  };

  return <button onClick={handleClick}>Submit</button>;
};

export default Form;
