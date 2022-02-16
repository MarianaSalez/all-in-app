import React from 'react'
import Form from 'react-bootstrap/Form'
import { Col,Row,Button, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { addDoc, collection, getFirestore} from 'firebase/firestore'


export default function Sale() {
    const [idSaleOrder, setIdSaleOrder] = useState('');
    const[generatedSaleOrder, setGeneratedSaleOrder]=useState(false)

//datos de Venta
    const [dataSaleForm , setDataSaleForm ] = useState({
        email: '',
        name: '',
        direction: '',
        number: 0,
        state:'',
        zip:'', 
    })


//Funcion para generar orden de venta
const SaleDone=async (e)=>{
    e.preventDefault()
    let sale={}
    sale.seller=dataSaleForm
    const db = getFirestore()

    const saleCollection = collection(db, 'ventas')
    await addDoc(saleCollection, sale)
    .then(resp => setIdSaleOrder(resp.id))
    .catch(err => console.log(err))
    .finally(()=>setGeneratedSaleOrder(true)) 
    }

    function NewSale(){
        setGeneratedSaleOrder(false)
    }

    function handleSaleChange(e) {
        setDataSaleForm({
            ...dataSaleForm,
            [e.target.name]: e.target.value
        })
    }

    return (

    <div>

        {generatedSaleOrder?
            <Container>
                <Card className="w-50 d-flex justify-content-center align-items-center" >
                    <Row>
                        <Col>
                            <Card.Img variant="top" src="https://res.cloudinary.com/dvkvyi1dr/image/upload/v1644964866/86724-sale_peim54.gif" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title className='text-success'>Gracias por su Venta</Card.Title>
                                    <Card.Text className='text-dark'>
                                    El Identificador de su venta es el siguiente: {idSaleOrder}
                                    </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Link to ='/sale'>
                                    <Button onClick={NewSale}> Nueva Venta </Button>
                                </Link>
                            </Card.Body>
                        </Col>
                    </Row>    
                </Card>
            </Container>
            :
            <Container>
            <Form  onSubmit={SaleDone}>
                <Row className="mb-3">

                    <Form.Group as={Col}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" required="required" name='name'  placeholder="Nombre completo" onChange={handleSaleChange} value={dataSaleForm.name} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required="required" name='email'  placeholder="Su email de contacto"  onChange={handleSaleChange} value={dataSaleForm.email}/>
                    </Form.Group>

                    
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Direccion de retiro de libros</Form.Label>
                    <Form.Control type="text" required="required" name='direction' placeholder="1234 Main St" onChange={handleSaleChange} value={dataSaleForm.direction}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Numero de Libros</Form.Label>
                        <Form.Control type="number" required="required" name='number'  min="1" placeholder="Numero de Libros" onChange={handleSaleChange} value={dataSaleForm.number}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control as="select" defaultValue="Nuevos" name='state' onChange={handleSaleChange} value={dataSaleForm.state} >
                            <option value="Nuevos">Nuevos</option>
                            <option value="Usados">Usados</option>
                        
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Link Catalogo</Form.Label>
                        <Form.Control type="text" required="required" name='zip' placeholder="https://example.com"  pattern="https://.*" onChange={handleSaleChange} value={dataSaleForm.zip}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"   required="required" label="Acepto los termines y condiciones de Librate" />
                </Form.Group>

                <Button type='submit' variant="primary">
                    Enviar
                </Button>
            </Form>
            </Container>

        }
        
            
    </div>
    )
}
