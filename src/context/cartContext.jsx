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
    const [idOrden, setIdOrden] = useState('');
    const[ordenGenerada, setOrdengenerada]=useState(false)

    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });


  
//Funcion para agregar elementos
    function agregarCarrito(items){
        const index=cartList.findIndex(i=>i.id===items.id)

        //si elemento existe
        if (index > -1) {
            const cantidadVieja=cartList[index].cantidad
            setCartList([cartList.filter(element => element !== items),{...items,cantidad:items.cantidad+cantidadVieja}])  
        }
        //Si el elemento no existe en el carrito
        else{
            setCartList([...cartList,items])
            
        }

        //Seteamos cantidad en el CartWidget
        setCartNumber(cartNumber+(items.cantidad))

        //Calculo y seteo de valores
        const subtotal=((items.cantidad)*(items.precio))
        const nuevoValorCompra=(valorCompra+subtotal)
        setValorCompra(nuevoValorCompra)
    }



//Funcion para vaciar todo el carrito
    function vaciarCarrito(){
        setCartList([])
        setCartNumber(0)
        setValorCompra(0)
        setOrdengenerada(false)
    }


//Funcion para eliminar un solo elemento del carrito

    function eliminarItem(items) {
        //Seteo nueva lista
        setCartList(cartList.filter(element => element !== items))
       
        //Seteo cantidad CartWidget
        const cartnvo=cartNumber-items.cantidad
        setCartNumber(cartnvo)

        //Seteo calculo de total
        const subtotal=(items.cantidad*items.precio)
        setValorCompra(valorCompra-subtotal)
    }


    return(
        <CartContext.Provider value={{cartList, agregarCarrito, vaciarCarrito,cartNumber, eliminarItem,valorCompra,ordenGenerada,setOrdengenerada,idOrden,setIdOrden, dataForm, setDataForm}}>
            {children}
        </CartContext.Provider>
    )


}


