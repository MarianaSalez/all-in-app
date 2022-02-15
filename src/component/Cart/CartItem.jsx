import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


export default function CartItem({item}) {

    const{cleanItem}=useContext(CartContext)

    function clean() {
        cleanItem(item)
        console.log('elemento eliminado')
        
        
        
    }
    const subtotal=(item.precio*item.qty).toPrecision(8)
    return (
                    <tr key={item.id} className='w-100'>
                            <td>{item.nombre}</td>
                            <td>{item.autor}</td>
                            <td>${item.precio}</td>
                            <td>{item.qty}</td>
                            <td>$ {subtotal}</td>  
                            <td><CloseButton onClick={clean}/></td>
                        </tr>
    )
    
}
