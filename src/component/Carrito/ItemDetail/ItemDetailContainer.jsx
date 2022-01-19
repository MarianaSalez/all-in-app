import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProd } from '../../../helpers/dataBase';
import  {useState,useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import {ClimbingBoxLoader} from 'react-spinners'


export default function ItemDetailContainer() {
    const [producto,setProducto] = useState({})
    const[loading,setLoading]= useState(true)
    
    

    const {idDetalle}=useParams()


    useEffect(() => {
        getProd
        .then(resp=>{setProducto(resp.find(producto=>producto.id=== idDetalle))})
        .finally(()=>setLoading(false))
    }, [idDetalle])
    
  
    return (
        <div>
             {loading ?
            <div>
                <ClimbingBoxLoader  color={"#123abc"} />
           
            </div>

            :
            <ItemDetail  item={producto} key={producto.id}/>}
        </div>
    )
}
