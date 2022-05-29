import {
    Navbar, Container, Nav,
} from 'react-bootstrap';

export default function navbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="#home">MYFIRSTWEB</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Profile</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
