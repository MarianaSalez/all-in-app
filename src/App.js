import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import NavMenu from './component/NavBar/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';
import { Container } from 'react-bootstrap';
import ItemDetailContainer from './component/Carrito/ItemDetail/ItemDetailContainer';
import Cart from './component/Cart/Cart';


function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <NavMenu/>
      <header className="App-header">
        <Container fluid className= 'justify-content-center'>
          <Routes>
            <Route exact path='/' element={<ItemListContainer usuario='Mariana'/> }/>
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer usuario='Mariana'/> }/>
            <Route exact path='/detalle/:idDetalle' element={ <ItemDetailContainer/>}/>
            <Route exact path='/cart' element={ <Cart/>}/>
          </Routes>
           
        </Container>
       
      </header>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
