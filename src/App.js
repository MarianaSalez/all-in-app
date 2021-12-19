import './App.css';
import NavMenu from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <header className="App-header">
       <ItemListContainer usuario='Mariana'/>
      </header>
    </div>
  );
}

export default App;
