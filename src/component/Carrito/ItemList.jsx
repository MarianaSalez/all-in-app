import React from 'react'
import Item from './Item'
import Row from 'react-bootstrap/Row'


export default function ItemList({productos}) {

    return (
        <div>
     
            <Row xs={1} md={2} className="g-4">
                 {productos.map((prod=>
            <Item item={prod} key={prod.id}/>
                ))}
            </Row>
        </div>
    )
}
