import { data } from "jquery";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    let newArray = [];
    props.information.map((x) => (
        x.id === props.idtot ? newArray.push({ title: x.title, picture: x.thumbnail, price: x.price }) : ""
    ))

    const [stockActual, setstockActual] = useState(10)
    const restaStock = (e, RestaValor) => {
        setstockActual((stockActual - RestaValor) < 0 ? stockActual : stockActual - RestaValor)
    }

    return (
        <>
                <Card style={{width: '1000px' ,marginTop:'200px'}}>
                    <Card.Img variant="top" src={newArray[0].picture} alt=":)" height="500px" />
                    <Card.Body>
                        <Card.Title>{newArray[0].title}</Card.Title>
                        <Card.Text>Precio: ${newArray[0].price}</Card.Text>
                        <ItemCount stock={stockActual} initial={1} onAdd={restaStock} />            
                    </Card.Body>
                </Card>

            {console.log('renderizo ItemDetail')}
        </>
    )
}

export default ItemDetail