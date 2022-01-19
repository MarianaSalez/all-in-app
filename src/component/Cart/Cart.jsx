import React from 'react'
import { useContext } from 'react'
import { Button,Row, Col } from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'
import CartItem from './CartItem'

//ACA HAY QUE MEJORAR PARA QUE DIGA, IR A COMPRAR Y TU CARRITO ESTA VACIO. ADEMAS, AMPLIAR DETALLE PARA QUE ME HAGA LA SUMA

export default function Cart() {

      

    const{cartList, vaciarCarrito}=useContext(CartContext)

    return (
        <div>
            {cartList.map(prod=><CartItem key={prod.id} item={prod}/>)}
            {'   '}
            <Row>
                <Col><Button  onClick={vaciarCarrito}> Vaciar Carrito</Button>
                </Col>
                <Col><Button > Finalizar compra</Button>
                </Col>
                
            </Row>
           
        </div>
        
    )
}
