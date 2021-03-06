import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid white",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>Ashley's Portfolio</h1>
      <nav style={navStyle}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>
    </header>
  );
}

export default Header;