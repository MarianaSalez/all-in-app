import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


export default function CartItem({item}) {

    const{eliminarItem}=useContext(CartContext)

    function eliminar() {
        eliminarItem({item})
        console.log('elemento eliminado')
        
        
        
    }
    const subtotal=(item.precio*item.cantidad).toPrecision(4)
    return (
                    <tr key={item.id} className='w-100'>
                            <td>{item.nombre}</td>
                            <td>{item.autor}</td>
                            <td>${item.precio}</td>
                            <td>{item.cantidad}</td>
                            <td>$ {subtotal}</td>  
                            <td><CloseButton onClick={eliminar}/></td>
                        </tr>
    )
    
}
