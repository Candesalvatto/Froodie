import { Navbar, Nav, Container, Offcanvas,  Image } from 'react-bootstrap';
import { useState } from 'react';

export const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Navbar expand="lg" sticky="top" className='NavBar'>
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            src="../../public/src/assets/img/logo-froodie-blanco-sin-fondo.png"
            className="d-inline-block align-top logo-nav"
            alt="Froodie logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
          <Nav className='link_c'>
            <Nav.Link className='nav_link' href="#productos">Productos</Nav.Link>
            <Nav.Link className='nav_link' href="#sobre-nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link  className='nav_link' href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvasNavbar">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Froodie</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link href="#productos" onClick={handleClose}>Productos</Nav.Link>
          <Nav.Link href="#sobre-nosotros" onClick={handleClose}>Sobre Nosotros</Nav.Link>
          <Nav.Link href="#contacto" onClick={handleClose}>Contacto</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}
