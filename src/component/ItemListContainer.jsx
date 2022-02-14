import React from 'react'
import ItemList from './Carrito/ItemList';
import  {useState,useEffect}  from 'react';
//import { getProd } from '../helpers/dataBase';
import { useParams } from 'react-router-dom';
import '../styles/ItemListContainer.css'
import { GridLoader } from 'react-spinners';
import { getFirestore,collection,query, getDocs,where } from 'firebase/firestore';


export default function ItemListContainer() {
    

   const [productos,setProductos] = useState([ ])

    const[loading,setLoading]= useState(true)

    const {idCategoria}=useParams()

    useEffect(() => {
        const db=getFirestore()

        if(idCategoria){
            const queryCollection= query(collection(db,'items'), where ('categoria','==',idCategoria))
            //Esto es una promesa
            getDocs(queryCollection)
            .then(resp=>{setProductos(resp.docs.map(prod=>({id:prod.id,...prod.data()})))})
            .catch(err=> console.log(err))
            .finally(()=>setLoading(false))
    
        }
        else{
            const queryCollection= query(collection(db,'items'))
            //Esto es una promesa
            getDocs(queryCollection)
            .then(resp=>{setProductos(resp.docs.map(prod=>({id:prod.id,...prod.data()})))})
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
                
            <ItemList productos={productos}/>
            </div> 
           }
        </div>     
        </div>
    )
}

