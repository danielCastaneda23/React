import './App.css';
import Navbar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';
import ItemDetail from '../src/components/ItemDetail'
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MCO/search?category=MCO180800')
            .then((respuesta) => respuesta.json())
            .then((respuesta) => setItem(respuesta.results))
    },[]);


    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer items={item} />
                    </Route>
                    <Route exact path="/item/:id?">
                        <ItemDetailContainer informationDetail={item} />
                        {console.log('renderizo App', item)}
                    </Route>
                </Switch>
            </BrowserRouter>


        </>

    )
};

export default App;
