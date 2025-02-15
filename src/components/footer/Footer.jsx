import { Container, Navbar } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Container className="footer-container">
      <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
        <Container className="footer-content">
          <Navbar.Brand href="#" className="quiz-brand">
            Quiz Time!!!&copy;
          </Navbar.Brand>
          <Navbar.Text className="established-text">
            Established 2025
          </Navbar.Text>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Footer;
