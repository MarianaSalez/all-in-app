import React from 'react'
import cartWidget from '../assets/cartWidget.png'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'

export default function CartWidget() {
    return (
        
    <Container fluid>
        <Row>
    <Col><img
          alt=""
          src={cartWidget}
          width="45"
          height="45"
          className="d-inline-block align-top"
        />{' '}</Col>
    <Col className="justify-content-center display-6" >0</Col>
  </Row>   
    </Container>
        
    )
}

