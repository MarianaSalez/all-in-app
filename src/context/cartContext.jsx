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
    const[shopValue, setShopValue]=useState(0)
    const [idOrder, setIdOrder] = useState('');
    const[generatedOrder, setGeneratedOrder]=useState(false)

    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });


  
//Funcion para agregar elementos
    function addCart(items){
        const index=cartList.findIndex(i=>i.id===items.id)

        //si elemento existe
        if (index > -1) {
            const oldQty=cartList[index].qty
            setCartList([cartList.filter(element => element !== items),{...items,qty:items.qty+oldQty}])  
        }
        //Si el elemento no existe en el carrito
        else{
            setCartList([...cartList,items])
            
        }

        //Seteamos cantidad en el CartWidget
        setCartNumber(cartNumber+(items.qty))

        //Calculo y seteo de valores
        const subtotal=((items.qty)*(items.precio))
        const newShopValue=(shopValue+subtotal)
        setShopValue(newShopValue)
    }



//Funcion para vaciar todo el carrito
    function CleanCart(){
        setCartList([])
        setCartNumber(0)
        setShopValue(0)
        setGeneratedOrder(false)
    }


//Funcion para eliminar un solo elemento del carrito

    function cleanItem(items) {
        //Seteo nueva lista
        setCartList(cartList.filter(element => element !== items))
       
        //Seteo cantidad CartWidget
        const cartnew=cartNumber-items.qty
        setCartNumber(cartnew)

        //Seteo calculo de total
        const subtotal=(items.qty*items.precio)
        setShopValue(shopValue-subtotal)
    }


    return(
        <CartContext.Provider value={{cartList, addCart, CleanCart,cartNumber, cleanItem,shopValue, generatedOrder,setGeneratedOrder,idOrder,setIdOrder, dataForm, setDataForm}}>
            {children}
        </CartContext.Provider>
    )


}


