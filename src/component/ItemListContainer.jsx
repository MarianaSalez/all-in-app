import React from 'react'
import ItemList from './Carrito/ItemList';

export default function ItemListContainer({usuario}) {
    
    return (
        <div>
            <h2>
                Bienvenid@ {usuario}!
            </h2>
            <ItemList/>
        </div>
    )
}
