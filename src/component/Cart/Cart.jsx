import React from 'react'
import { useContext } from 'react'
import { Button,Row, Col, Container, Placeholder} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { CartContext } from '../../context/cartContext'
import CartItem from './CartItem'
import Table from 'react-bootstrap/Table'
import './cart.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

//ACA HAY QUE MEJORAR PARA QUE DIGA, IR A COMPRAR Y TU CARRITO ESTA VACIO. ADEMAS, AMPLIAR DETALLE PARA QUE ME HAGA LA SUMA

export default function Cart() {

    const{cartList, vaciarCarrito,valorCompra}=useContext(CartContext)
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');


    const realizarCompra=async(e)=>{
        e.preventDefault()
        let orden={}
        orden.buyer=dataForm
        orden.total=valorCompra

        orden.items=cartList.map(cartItem=>{
            const id=cartItem.id
            const nombre=cartItem.nombre
            const precio=cartItem.precio*cartItem.cantidad
            const cantidad=cartItem.cantidad

            return{id,nombre,precio, cantidad}

        })

        const db = getFirestore()

        const oredenCollection = collection(db, 'ordenes')
        await addDoc(oredenCollection, orden)
        .then(resp => setIdOrden(resp.id))
        .then(() => console.log(idOrden))
        .catch(err => console.log(err))
        .finally(()=>vaciarCarrito())

    }

    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }



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
                                        <h4>El total de su compra es ${valorCompra}</h4>
                                    </Row>
                        </Col>
                        
                        <Col>
                        <Container className='formContainer' >

                            <Form  onSubmit={realizarCompra} >

                            <Form.Group className="mb-3">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" required="required" name='name'  placeholder="Ingrese su nombre" onChange={handleChange}
                                value={dataForm.name}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="number" required="required"  name='phone' placeholder='tel' onChange={handleChange} value={dataForm.phone}/>
                            </Form.Group>


                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required="required" name='email' placeholder='email' onChange={handleChange}value={dataForm.email} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" required="required" label="Acepto terminos y condiciones de Librate" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            Finalizar compra</Button>

                            </Form>
                        </Container>
                        
                        </Col>
                    </Row>

                    <Placeholder/>
                       
                                  

                        <Row>
                            
                        <Col><Button  onClick={vaciarCarrito}> Vaciar Carrito</Button>
                            </Col>
                            
                        </Row>
                    
                    </div>





               } 
                    
          </div>      

        
    )
}
