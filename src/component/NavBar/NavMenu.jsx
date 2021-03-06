import { Link } from 'react-router-dom'


import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import '../../styles/NavMenu.css'





const NavMenu = () => {
    return (
<Navbar  expand="lg" style={{background: '#768cd3'}}>
<Container fluid>
  <Link className='Link' to='/'>
  <Navbar.Brand>
    <Container fluid>
    <Col>
    <Row><img
          alt=""
          src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1644957779/logo_xaprkk.png'
          width="80"
          height="80"
          className="d-inline-block align-top"
        />{' '}</Row>
    <Row className="justify-content-center">LIBRATE</Row>
  </Col>  
  <Col>
  
  </Col> 
    </Container>
    </Navbar.Brand>
  </Link>
  <Nav className="me-auto">
  <Link className='Link' to ='/cart'>
      <CartWidget/>
      </Link>

  </Nav>
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
 
      <Link className='Link' to='/categoria/Nuevo' >Nuevos</Link>
      <Link  className='Link'to='/categoria/Usado' >Usados</Link>
      <Link className='Link' to='/sale' >Venta</Link>
      
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}

export default NavMenu
