import React from 'react'
import ItemList from './Carrito/ItemList';
import  {useState,useEffect}  from 'react';
import { getProd } from '../helpers/dataBase';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useParams } from 'react-router-dom';
import '../styles/ItemListContainer.css'

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

        console.log(productos)
        
        
    
    

    return (

        <div>
            <h2>
                Bienvenid@ {usuario}!
            </h2>
          <div className='Grilla'>
            {loading ?
            <div>
                <ProgressBar animated now={45} />
            <h2>Cargando...</h2>
            
            </div>

            :
            <ItemList productos={productos}/>
            
           }
        </div>  
        </div>
    )
}

