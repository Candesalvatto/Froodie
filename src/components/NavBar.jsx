import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Navbar expand="lg" sticky="top" className='NavBar'>
      <Container fluid  >
        <Navbar.Brand href="#home" >
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} className='navbar-toggle' ></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-center d-none d-lg-flex ">
          <Nav className='link_c'>
            <Nav.Link  className='nav_link' href='#productos'>Productos</Nav.Link>
            <Nav.Link  className='nav_link'  href='#sobre-nosotros'>Sobre Nosotros</Nav.Link>
            <Nav.Link  className='nav_link'  href='#contacto'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvasNavbar" className="offcanvas-custom">
      <Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link  className='offcanvas-link' as={Link} to="productos" smooth={true} duration={500} onClick={handleClose}>Productos</Nav.Link>
          <Nav.Link  className='offcanvas-link' as={Link} to="sobre-nosotros" smooth={true} duration={500} onClick={handleClose}>Sobre Nosotros</Nav.Link>
          <Nav.Link  className='offcanvas-link' as={Link} to="contacto" smooth={true} duration={500} onClick={handleClose}>Contacto</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}
