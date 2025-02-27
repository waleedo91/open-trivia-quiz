import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import quizLogo from "../../images/—Pngtree—quiz time_8530811.png";

import "./TopBar.css";

function TopBar() {
  return (
    <Navbar className="bg-body-tertiary navbar-container">
      <Container>
        <Navbar.Brand className="top-container">
          <img
            src={quizLogo}
            alt="logo with a head and cogs with question mark in head."
            width="75"
            height="75"
          />{" "}
          <Link to="/">Quiz Time!!!</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopBar;
