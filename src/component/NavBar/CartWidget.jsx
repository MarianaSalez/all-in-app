import React from 'react'
import cartWidget from '../../assets/cartWidget.png'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export default function CartWidget() {
  const{cartNumber}=useContext(CartContext)

  //HAY QUE MODIFICAR EL CART PARA QUE ESTE LA CANTIDAD TOTAL
  //lA NUMERACION TIENE QUE EMPEZAR A PARTIR DE UNO
    return (
        
    <Container fluid>
        <Row>
    <Col><img
          alt=""
          src={cartWidget}
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' '}
        <Col>
        
        <h2 color='black'>{cartNumber}</h2></Col>
        </Col>
        
       
        
    
  </Row>   
    </Container>
        
    )
}

