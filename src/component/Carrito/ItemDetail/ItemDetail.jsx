import React from 'react'
import { Container, Row,Col,Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ItemCount from '../../../helpers/ItemCount';
import '../../../styles/ItemDetail.css'


export default function ItemDetail({item}) {

    return (
        <div className='DetailCard'>
            <Container key={item.id}  className= 'justify-content-center'>
                <Row>
                    <Col xs={7}>
                       <img src={item.img} alt='Img-Prod'></img>
                        </Col>
                    <Col>
                    
                        <Card border="none">
                            <Card.Body>
                                <Card.Title className="text-dark">{item.nombre}-{item.autor}</Card.Title>
                                <Card.Title style={{color: 'green'}}>${item.precio}</Card.Title>
                                <Card.Text className="DetailDescription">
                                    {item.descripcion}
                                 </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                            <ItemCount stock= {item.stock}/>
                            </Card.Footer>
                         
                        </Card>
                    </Col>
                </Row>
                

                <Link to='/cart'>
                    <Button variant="primary" className='DetailBoton'>Comprar</Button>
                </Link>
                
            </Container>
            
        </div>
    )
}
