import React from 'react'
import cartWidget from '../../assets/cartWidget.png'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export default function CartWidget() {
  const{cartList, cartNumber}=useContext(CartContext)

 
    return (
        
    <Container fluid>
    {(cartList.length===0)?
  <Row>
  <img
        alt=""
        src={cartWidget}
        width="35"
        height="35"
        className="d-inline-block align-top"
      />
</Row>   

:

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
    }

      
    </Container>
        
    )
}

