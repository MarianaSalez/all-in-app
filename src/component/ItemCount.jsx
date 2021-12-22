import React from 'react'
import { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const ItemCount = ({stock}) => {
    const [count, setCount]= useState(0)
    
    //Funcion para sumar cantidades
    const addCount=()=>{
        if(count>=stock){
        console.log("Ya se ha vendido todos los productos")
    }
    else{
        setCount(count+1)}
    }

    //Funcion para restar cantidades
    const restCount=()=>{
        if(count<=0){

            //aca va la funcion para desarmarlo
        }
        else{
            setCount(count-1)
        }
       }


    return (
        <div>
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
            <Button onClick={addCount} variant="outline-secondary">Agregar al Carrito </Button>
            </Card.Body>
            </Card>
            
           
            
        </div>
    )
}

export default ItemCount
