
import { useContext } from 'react'
import { Button,Row, Col, Placeholder} from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'
import CartItem from './CartItem'
import Table from 'react-bootstrap/Table'
import '../../styles/cart.css'
import { Link } from 'react-router-dom'
import BuyingList from './BuyingList'
import BuyForm from './BuyForm'


export default function Cart() {

    const{cartList, CleanCart,shopValue,generatedOrder}=useContext(CartContext)
  
    
    return (
        
        <div className='justify-content-center'>
        {//Carrito vacio
               (cartList.length===0)? 
            
                    <div>
                        <h1>Su Proxima compra lo esta esperando</h1>
                            <Link  to ='/'>
                                <Button variant="primary"> Ir a Comprar </Button>
                            </Link>
                     </div>

        //Carrito lleno y orden generada  
                :generatedOrder?
                    <BuyingList/>
               
        //Carrito lleno y sin orden generada
                :
            <div>   
         
            <h1>Detalle del Carrito</h1>     
                 
            <Placeholder/>
            <Row>
                <Col  xs={7}>
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
                                <h4>El total de su compra es ${shopValue}</h4>
                            </Row>
                </Col>
                
                <Col>
                    <BuyForm/>
                </Col>
            </Row>

            <Placeholder/>
               
                <Row>
                    
                <Col><Button  onClick={CleanCart}> Vaciar Carrito</Button>
                    </Col>
                    
                </Row>
            
            </div>
               } 
                    
          </div>      

        
    )
}


