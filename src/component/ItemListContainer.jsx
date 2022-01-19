import React from 'react'
import ItemList from './Carrito/ItemList';
import  {useState,useEffect}  from 'react';
import { getProd } from '../helpers/dataBase';
import { useParams } from 'react-router-dom';
import '../styles/ItemListContainer.css'
import { GridLoader } from 'react-spinners';

export default function ItemListContainer({usuario}) {
    

    const [productos,setProductos] = useState([ ])

    const[loading,setLoading]= useState(true)

    const {idCategoria}=useParams()

    useEffect(() => {
        if(idCategoria){
            getProd
            .then(resp=>{setProductos(resp.filter(item=>item.categoria===idCategoria))})
            .catch(err=> console.log(err))
            .finally(()=>setLoading(false))

        }
        else{
            getProd
            .then(resp=>{setProductos(resp)})
            .catch(err=> console.log(err))
            .finally(()=>setLoading(false))
        }}, [idCategoria]) 

    return (

        <div>
            
          <div className='Grilla'>
            {loading ?
            <div>
                <GridLoader size={20} color={"#123abc"} speedMultiplier={1.5}/>
           
            
            </div>

            :
            <div>
                <h2>
                Bienvenid@ {usuario}!
            </h2>

            <ItemList productos={productos}/>
            </div> 
           }
        </div>  
        </div>
    )
}

