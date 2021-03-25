import { useState } from "react"
import ItemDetail from "./ItemDetail"
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"

const ItemDetailContainer = (props) => {
    let { id } = useParams();
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MCO/search?category=MCO180800')
            .then((respuesta) => respuesta.json())
            .then((respuesta) => respuesta.results)
            .then((respuesta) => {
                let ArrayDisplay = []
                for (let i = 0; i < respuesta.length; i++) {
                    if (respuesta[i].id == id) {
                        ArrayDisplay.push(respuesta[i].title, respuesta[i].thumbnail, respuesta[i].price);
                    }
                }
                return (ArrayDisplay)
            })
            .then((resultado) => setItem(resultado))
    }, [])
    return (
        <>
            <div className="row mx-0 justify-content-center">
                <ItemDetail information={item}/>
                {console.log('renderizo ItemDetailContainer', props.information)}
            </div>
        </>
    )
}
export default ItemDetailContainer;