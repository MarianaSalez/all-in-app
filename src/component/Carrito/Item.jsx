import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';

 function Item({item}) {

    return (
        <div className='d-flex justify-content-center col-md-3 col-sm-4 col-xs-12'>
         
            <Card  key={item.id} className='Card'>
                <Card.Header className="CardHeader">{item.nombre}-{item.autor}</Card.Header>
                    <Card.Img  className='CardImage' variant="top" src={item.img} />
                        <Card.Body className='CardBody'>
                        <Card.Title className="text-secondary">$ {(item.precio)}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Link to={`/detalle/${item.id}`}>
                            <Button variant="outline-primary">Ver Detalles</Button>
                        </Link>
                    </Card.Footer>
                </Card>
                {' '}
        </div>
       
    )
}

export default Item

