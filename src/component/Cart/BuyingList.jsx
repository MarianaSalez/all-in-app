import React, { useContext } from 'react';
import { Badge, Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

export default function BuyingList() {

    const{idOrder, CleanCart,cartList, dataForm}=useContext(CartContext)

  return <div>
            <Container>
                <Card style={{ width: '50%' }} >
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="https://res.cloudinary.com/dvkvyi1dr/image/upload/v1643930025/carritoCompra_Realizada_rnl8um.gif" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title className='text-success'>Gracias por su compra {dataForm.name}</Card.Title>
                                    <Card.Text className='text-dark'>
                                    El Identificador de su compra es el siguiente: {idOrder}
                                    </Card.Text>
                                <Card.Header className='text-success'>RESUMEN DE COMPRA:</Card.Header>
                                <ListGroup className="list-group-flush">
                                    {cartList.map(prod=><ListGroupItem key={prod.id} variant="primary" as="li" className="d-flex justify-content-between align-items-start">{prod.nombre} <Badge bg="secondary">{prod.qty}</Badge></ListGroupItem>)}  
                                </ListGroup>
                            </Card.Body>
                            <Card.Body>
                                <Link to ='/'>
                                    <Button onClick={CleanCart}> Nueva Compra </Button>
                                </Link>
                            </Card.Body>
                        </Col>
                    </Row>    
                </Card>
            </Container>
  </div>;
}
