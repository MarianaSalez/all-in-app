import React from 'react'
import { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]= useState(0)
    const [newstock, setNewStock]= useState(stock)

    //Funcion para sumar cantidades
    const addCount=()=>{
        if(count>=stock){
        console.log("Ya se han vendido todos los productos")
    }
    else{
        setCount(count+1)
        setNewStock(newstock-1)}
    }

    //Funcion para restar cantidades
    const restCount=()=>{
        if(count<=0){
            console.log("Ya no hay elementos en el carrito")
        }
        else{
            setCount(count-1)
            setNewStock(newstock+1)
        }
       }
    
       function comprar() {
           onAdd(count)   
       }

    return (
        <div>
            {
            (count===0)?
            <Card  border="light" className="text-center">
            <Card.Body>
            <Button onClick={addCount} variant="outline-secondary">Agregar al Carrito </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                  Quedan disponibles {newstock} unidades
            </Card.Footer>
            </Card>
            :
            <Card  border="light" className="text-center">
            <Card.Body>
            <Row>
            <Col><Button onClick={restCount} variant="outline-secondary">-</Button></Col>
            {'    '}
            <Col><p className="text-dark">
                     {count}
                     </p></Col>{'   '}

            <Col><Button onClick={addCount} variant="outline-secondary">+ </Button></Col>
            </Row>
            <Link  to ='/cart'>
            <Button variant="primary" onClick={comprar}> Comprar </Button>
            </Link>  
            </Card.Body>
            <Card.Footer className="text-muted">
                  Quedan disponibles {newstock} unidades
            </Card.Footer>
            </Card>
            }
        </div>
    )

}

export default ItemCount
