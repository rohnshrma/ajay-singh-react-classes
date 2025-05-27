const Header = (props) => {
  const { text, date } = props;

  return (
    <div className="header text-center bg-dark text-light p-2 rounded-bottom shadow-lg">
      <h1>
        {text} : {date}
      </h1>
    </div>
  );
};

export default Header;
