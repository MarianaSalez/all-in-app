//Creación del contexto

import { useContext } from 'react'
import {createContext,useState} from 'react'




export function useCartContext() {
    return useContext(CartContext)
    
}


export const CartContext= createContext([])

//Creación del componente que maneja el contexto
export const CartContextProvider=({children})=>{
    //estados y funciones flobales

    const[cartList,setCartList]=useState([])
    const[cartNumber,setCartNumber]=useState(0)
    const[valorCompra, setValorCompra]=useState(0)


  

    function agregarCarrito(items){
        const index=cartList.findIndex(i=>i.id===items.id)
        if (index > -1) {
            
            const cantidadVieja=cartList[index].cantidad
            cartList.splice(index,1)
            setCartList([...cartList,{...items,cantidad:items.cantidad+cantidadVieja}])
         
        }
        else{
            setCartList([...cartList,items])
            
        }
        setCartNumber(cartNumber+(items.cantidad))
        const subtotal=((items.cantidad)*(items.precio))
        const nuevoValorCompra=(valorCompra+subtotal)
        setValorCompra(nuevoValorCompra)
        console.log(valorCompra)
    }

    function vaciarCarrito(){
        setCartList([])
        setCartNumber(0)
        setValorCompra(0)
    }
    
    function eliminarItem(items) {
        const index=cartList.findIndex(i=>i.id===items.id)
        const cartnvo=cartNumber-items.cantidad
        const subtotal=(items.cantidad*items.precio)
        cartList.splice(index,1)
        setCartList([...cartList])
        setCartNumber(cartnvo)
        setValorCompra(valorCompra-subtotal)
        console.log(valorCompra)
        
    }

   
  

    return(
        <CartContext.Provider value={{cartList, agregarCarrito, vaciarCarrito,cartNumber, eliminarItem,valorCompra}}>
            {children}
        </CartContext.Provider>
    )


}


