import './App.css';
import NavMenu from './component/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';
import ItemList from './component/Carrito/ItemList';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <NavMenu/>
      <header className="App-header">
        <Container fluid className= 'justify-content-center'>
          <ItemListContainer usuario='Mariana'/>
           <ItemList/>
        </Container>
       
      </header>
    </div>
  );
}

export default App;
