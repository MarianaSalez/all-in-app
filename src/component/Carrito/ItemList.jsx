import React from 'react'
import Item from './Item'
import Row from 'react-bootstrap/Row'
import  {useState,useEffect}  from 'react';
import { getProd } from '../../helpers/dataBase';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useParams } from 'react-router-dom';

export default function ItemList() {

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
          <div>
            {loading ?
            <div>
                <ProgressBar animated now={45} />
            <h2>Cargando...</h2>
            
            </div>

            :
            <Row xs={1} md={2} className="g-4">
                 {productos.map((prod=>
            <Item item={prod} key={prod.id}/>
                ))}
            </Row>
            
           }
        </div>  
        </div>
    )
}
