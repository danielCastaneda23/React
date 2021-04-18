import { useState } from "react"
import ItemDetail from "./ItemDetail"

import { useEffect } from "react";
import { useParams} from "react-router-dom"

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
                    if (respuesta[i].id === id) {
                        ArrayDisplay.push(respuesta[i].title, respuesta[i].thumbnail, respuesta[i].price, respuesta[i].id ,respuesta[i].available_quantity);
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
            </div>
        </>
    )
}
export default ItemDetailContainer;