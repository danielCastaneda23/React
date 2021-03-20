
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Item = (props) => {
    const [stockActual, setstockActual] = useState(10)
    const restaStock = (e, RestaValor) => {
        setstockActual((stockActual - RestaValor) < 0 ? stockActual : stockActual - RestaValor)
    }
    return (
        <Card style={{ width: '300px', marginLeft: '30px' }}>
            <Card.Img variant="top" src={props.item.thumbnail} alt=":)" height="200px" />
            <Card.Body>
            <Link to={`/item/${props.item.id}`} className="text-dark"><Card.Title>{props.item.title}</Card.Title></Link>
                <Card.Text>Precio: ${props.item.price}</Card.Text>
                <ItemCount stock={stockActual} initial={1} onAdd={restaStock} />            </Card.Body>
        </Card>
    )
}
export default Item;