import './App.css';
import Navbar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';
import { Component, useState } from 'react';


// class App extends Component {
//     constructor(props){
//         super(props);

//         this.state={
//             contador: 0
//         };
//     }

//     contarClick(e){
//         e.preventDefault();
//         let nuevoNumero=this.state.contador + 1;
//         this.setState({contador: nuevoNumero});
//     }
//     render() {
//         return (
//             <>
//                 <div><button className="btn btn-secondary" onClick={(e)=>this.contarClick(e)}> Contar</button></div>
//                 <div>Contador ={this.state.contador}</div>
//                 <Navbar title="Hola" />
//                 <ItemListContainer greeting="Este Es ItemListContainer" />
//             </>
//         )
//     }
// }

const App = () => {
    const [contador, setContador] = useState(0);
    return (
        <>
            <Navbar />
            <ItemListContainer greeting="Este Es ItemListContainer" />
            {/* <div><button className="btn btn-secondary" onClick={() => setContador((contador) => contador + 1)}> Contar</button></div>
            <div>Contador ={contador}</div> */}
        </>

    )
};

export default App;
