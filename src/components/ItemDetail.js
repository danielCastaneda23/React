import { data } from "jquery";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const [stockActual, setstockActual] = useState(10)
    const [stateButton, setStateButton] = useState(false)
    const restaStock = (e, RestaValor) => {
        setStateButton(true)
        setstockActual((stockActual - RestaValor) < 0 ? stockActual : stockActual - RestaValor)
    }

    return (
        <>
                <Card style={{width: '1000px' ,marginTop:'200px'}}>
                    <Card.Img variant="top" src={props.information[1]} alt=":)" height="500px" />
                    <Card.Body>
                        <Card.Title>{props.information[0]}</Card.Title>
                        <Card.Text>Precio: ${props.information[2]}</Card.Text>
                        {stockActual<=0 ? <div className="text-center"><b> No Hay Stock Suficiente: (10 productos)</b></div> :<ItemCount stock={stockActual} initial={1} onAdd={restaStock} /> }
                        {stateButton ? <div className="text-center mt-3"><Button variant="dark"><Link to={`/cart`} className="text-white">TERMINAR COMPRA</Link> </Button></div> : null}
                    </Card.Body>
                </Card>

            {console.log('renderizo ItemDetail', props.information)}
        </>
    )
}

export default ItemDetail