import { data } from "jquery";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const [stockActual, setstockActual] = useState(10)
    const restaStock = (e, RestaValor) => {
        setstockActual((stockActual - RestaValor) < 0 ? stockActual : stockActual - RestaValor)
    }

    return (
        <>
                <Card style={{width: '1000px' ,marginTop:'200px'}}>
                    <Card.Img variant="top" src={props.information[1]} alt=":)" height="500px" />
                    <Card.Body>
                        <Card.Title>{props.information[0]}</Card.Title>
                        <Card.Text>Precio: ${props.information[2]}</Card.Text>
                        <ItemCount stock={stockActual} initial={1} onAdd={restaStock} />            
                    </Card.Body>
                </Card>

            {console.log('renderizo ItemDetail', props.information)}
        </>
    )
}

export default ItemDetail