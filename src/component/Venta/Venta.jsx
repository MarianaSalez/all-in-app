import React from 'react'
import Form from 'react-bootstrap/Form'
import { Col,Row,Button, Container } from 'react-bootstrap'

export default function Venta() {
    return (
    <div>
        <Container>
            <Form>
                <Row className="mb-3">

                    <Form.Group as={Col}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Nombre completo" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Su email de contacto" />
                    </Form.Group>

                    
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Direccion de retiro de libros</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Numero de Libros</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select defaultValue="Nuevos">
                            <option>Nuevos</option>
                            <option>Usados</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip Catalogo</Form.Label>
                        <Form.Control placeholder="Deje aqui el detalle"/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Acepto los termines y condiciones de Librate" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
            
    </div>
    )
}
