import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/logo.png";
import "./Header.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <header>
      <div className="top_header"></div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#StudyAbroad" contact>Study Abroad</Nav.Link>
            <Nav.Link href="#">Courses</Nav.Link>
            <Nav.Link href="#">Why My StudyHut</Nav.Link>
            <Nav.Link href="#contact">Contuct Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;
