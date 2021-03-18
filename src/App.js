import './App.css';
import Navbar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';
import ItemDetail from '../src/components/ItemDetail'
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MCO/search?category=MCO180800')
            .then((respuesta) => respuesta.json())
            .then((respuesta) => setItem(respuesta.results))
        // new Promise((Bien,Mal) => {
        //     setTimeout(() => {
        //         Bien({id:"346556473",cel:"Titulo",title:"$3500",pictturE:":)"});
        //     },2000)
        // }).then((resultado) => setItem(resultado))
    }, []);


    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer items={item} />
                    </Route>
                    <Route path="/new">
                        <ItemDetail />
                    </Route>
                </Switch>
            </BrowserRouter>


        </>

    )
};

export default App;
