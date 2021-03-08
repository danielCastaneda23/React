import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';


const App=()=> (
    <>
    <Navbar title="Hola" />
    <ItemListContainer greeting="Este Es ItemListContainer" />
</>
)


export default App;
