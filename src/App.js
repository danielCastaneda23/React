import './App.css';
import Navbar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import ThemeContext from './context/cartContext';
import Cart from './components/Cart';
const App = () => {
    const [item, setItem] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MCO/search?category=MCO180800')
            .then((respuesta) => respuesta.json())
            .then((respuesta) => setItem(respuesta.results))
    }, []);


    return (
        <div className="container-fluid ">
            <ThemeContext.Provider value={{cart, setCart}}>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/category/:id?">
                            <ItemListContainer items={item} />
                        </Route>
                        <Route exact path="/item/:id?">
                            <ItemDetailContainer information={item} />
                        </Route>
                        <Route exact path="/cart">
                            <Cart/>
                        </Route>
                    </Switch>
                </BrowserRouter>

            </ThemeContext.Provider>
        </div>

    )
};

export default App;
