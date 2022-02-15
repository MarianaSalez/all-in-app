
import { useContext } from 'react'
import { Button,Row, Col, Container, Placeholder} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { CartContext } from '../../context/cartContext'
import CartItem from './CartItem'
import Table from 'react-bootstrap/Table'
import './cart.css'
import { Link } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import BuyingList from './BuyingList'


//ACA HAY QUE MEJORAR PARA QUE DIGA, IR A COMPRAR Y TU CARRITO ESTA VACIO. ADEMAS, AMPLIAR DETALLE PARA QUE ME HAGA LA SUMA

export default function Cart() {

    const{cartList, CleanCart,shopValue,generatedOrder,setGeneratedOrder,idOrder,setIdOrder, dataForm,setDataForm}=useContext(CartContext)
  
    
//Funcion para generar orden de compra
    const realizarCompra=async (e)=>{
        e.preventDefault()
        let orden={}
        orden.buyer=dataForm
        orden.total=shopValue

        orden.items=cartList.map(cartItem=>{
            const id=cartItem.id
            const nombre=cartItem.nombre
            const precio=cartItem.precio*cartItem.qty
            const qty=cartItem.qty

            return{id,nombre,precio, qty}

        })

        const db = getFirestore()

        const oredenCollection = collection(db, 'ordenes')
        await addDoc(oredenCollection, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .then(() => console.log(idOrder))
        .finally(()=>setGeneratedOrder(true))

    


    //Funcion para actualizar stock

    const queryCollection = collection(db, 'items')

        //console.log(cleccionNoti)
        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)       
        
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).qty
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()    
        }


    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


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
                    
                <Col><Button  onClick={CleanCart}> Vaciar Carrito</Button>
                    </Col>
                    
                </Row>
            
            </div>
               } 
                    
          </div>      

        
    )
}
