import logo from '../assets/logo.png'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import '../styles/NavMenu.css'





const NavMenu = () => {
    return (
<Navbar  expand="lg" style={{background: '#768cd3'}}>
<Container fluid>
  <Navbar.Brand href="#home">
    <Container fluid>
    <Col>
    <Row><img
          alt=""
          src={logo}
          width="80"
          height="80"
          className="d-inline-block align-top"
        />{' '}</Row>
    <Row className="justify-content-center">LIBRATE</Row>
  </Col>   
    </Container>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Envios</Nav.Link>
      <NavDropdown title="Libros" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Usados</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Venta</NavDropdown.Item>
      </NavDropdown>
      <CartWidget/>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}

export default NavMenu
