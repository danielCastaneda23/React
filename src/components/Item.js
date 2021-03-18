
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer'
import { useState } from 'react';
import { Link } from "react-router-dom";

const Item = (props) => {
    const [stockActual, setstockActual] = useState(10)
    const restaStock = (e, RestaValor) => {
        setstockActual((stockActual - RestaValor) < 0 ? stockActual : stockActual - RestaValor)
    }
    return (
        <Card style={{ width: '300px', marginLeft: '30px' }}>
            <Card.Img variant="top" src={props.item.thumbnail} alt=":)" height="200px" />
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>Precio: ${props.item.price}</Card.Text>
                <ItemCount stock={stockActual} initial={1} onAdd={restaStock} />
                <ItemDetailContainer titleDetail={props.item.title} />
            </Card.Body>
        </Card>
    )
}
export default Item;