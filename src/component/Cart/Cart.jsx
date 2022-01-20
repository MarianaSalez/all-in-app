import React from 'react'
import { useContext } from 'react'
import { Button,Row, Col} from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'
import CartItem from './CartItem'
import Table from 'react-bootstrap/Table'
import './cart.css'
import { Link } from 'react-router-dom'

//ACA HAY QUE MEJORAR PARA QUE DIGA, IR A COMPRAR Y TU CARRITO ESTA VACIO. ADEMAS, AMPLIAR DETALLE PARA QUE ME HAGA LA SUMA

export default function Cart() {

    const{cartList, vaciarCarrito,valorCompra}=useContext(CartContext)

 

    return (
        
        <div className='justify-content-center'>
               {(cartList.length===0)? 
                <div>
                    <h1>Su Proxima compra lo esta esperando</h1>
                        <Link  to ='/'>
                            <Button variant="primary"> Ir a Comprar </Button>
                        </Link>
                </div>
                :
                <div>

                    <h1>Detalle del Carrito</h1>
                        <Table className='table' responsive="sm">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Autor</th>
                                        <th>precio</th>
                                        <th>cantidad</th>
                                        <th>subtotal</th>  
                                    </tr>
                                </thead>
                                <tbody className='justify-content-center'>
                                    {cartList.map(prod=>
                                        <CartItem key={prod.id} item={prod}/>)}
                                </tbody>
                                
                                    
                                    </Table>
                                    <Row>
                                        <h2>El total de su compra es ${valorCompra}</h2>
                                    </Row>

                        <Row>
                            <Col><Button  onClick={vaciarCarrito}> Vaciar Carrito</Button>
                            </Col>
                            <Col><Button > Finalizar compra</Button>
                            </Col>
                            
                        </Row>
                    
                    </div>

               } 
                    
          </div>      

        
    )
}
