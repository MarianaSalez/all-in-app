import React, { useContext} from 'react'
import { Button, Container, } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { CartContext } from '../../context/cartContext'
import '../../styles/cart.css'

export default function BuyForm() {


    const{realizarCompra,dataForm,setDataForm}=useContext(CartContext)

   

    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

   
  return (
    <div>
         <Container className='formContainer' >

<Form  onSubmit={realizarCompra} >

<Form.Group className="mb-3">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type="text" required="required" name='name'  placeholder="Ingrese su nombre" onChange={handleChange} value={dataForm.name}/>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Telefono</Form.Label>
    <Form.Control type="number" required="required"  name='phone' placeholder='tel' onChange={handleChange} value={dataForm.phone}/>
</Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" required="required" name='email' placeholder='email' onChange={handleChange} value={dataForm.email} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" required="required" label="Acepto terminos y condiciones de Librate" />
</Form.Group>
<Button variant="primary" type="submit">
Finalizar compra</Button>

</Form>
</Container>
    </div>
  )
}
