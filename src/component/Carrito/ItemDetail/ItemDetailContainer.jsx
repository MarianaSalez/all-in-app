import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProd } from '../../../helpers/dataBase';
import  {useState,useEffect}  from 'react';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
    const [producto,setProducto] = useState({})
    

    const {idDetalle}=useParams()


    useEffect(() => {
        getProd
        .then(resp=>{setProducto(resp.find(producto=>producto.id=== idDetalle))})
    }, [idDetalle])
    
  
    return (
        <div>
            <ItemDetail  item={producto} key={producto.id}/>
        </div>
    )
}
