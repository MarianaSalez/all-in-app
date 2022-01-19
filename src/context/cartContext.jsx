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
    }

    function vaciarCarrito(){
        setCartList([])
    }

   
    

  

    return(
        <CartContext.Provider value={{cartList, agregarCarrito, vaciarCarrito,cartNumber}}>
            {children}
        </CartContext.Provider>
    )


}


