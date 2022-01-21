import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';

 function Item({item}) {

    return (
        <div className='col-md-4'>
         
            <Card  key={item.id} style={{ width: '450px', hight: '600px'}}>
                <Card.Header className="text-dark">{item.nombre}-{item.autor}</Card.Header>
                    <Card.Img  width="300px" height="400px" variant="top" src={item.img} />
                        <Card.Body>
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

