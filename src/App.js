import './App.css';
import Navbar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';
import { useEffect, useState } from 'react';

const App = () => {
    const [item,setItem]= useState([])
    useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MCO/search?category=MCO180800')
    //     .then((respuesta) => respuesta.json())
    //     .then((respuesta) => console.log(respuesta.results[0].thumbnail))
        new Promise((Bien,Mal) => {
            setTimeout(() => {
                Bien(["346556473","Titulo","$3500",":)"]);
            },2000)
        }).then((resultado) => setItem(resultado))
    },[]);


    return (
        <>
            <Navbar />
            <ItemListContainer items={item} />
        </>

    )
};

export default App;
