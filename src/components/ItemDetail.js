
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import { useContext, useState } from 'react';
import ThemeContext from "../context/cartContext";

const ItemDetail = (props) => {
    const [stockActual, setstockActual] = useState(10)
    const [stateButton, setStateButton] = useState(false)
    const [addToCar, setAddToCar] = useState(0)
    const {cart, setCart} = useContext(ThemeContext)

    const restaStock = (e, RestaValor) => {
        setStateButton(true)
        setstockActual((stockActual - RestaValor) < 0 ? stockActual : stockActual - RestaValor)
        setAddToCar(RestaValor);
    }


    return (

        <>
                <Card style={{width: '1000px' ,marginTop:'200px'}}>
                    <Card.Img variant="top" src={props.information[1]} alt=":)" height="500px" />
                    <Card.Body>
                        <Card.Title>{props.information[0]}</Card.Title>
                        <Card.Text>Precio: ${props.information[2]}</Card.Text>
                        {stockActual<=0 ? <div className="text-center"><b> No Hay Stock Suficiente: (10 productos)</b></div> :<ItemCount stock={stockActual} initial={1} onAdd={restaStock} /> }
                        {/* {stateButton ? <div className="text-center mt-3"><Button variant="dark" onClick={() => context.addCar(addToCar)}><Link to={`/cart`} className="text-white">TERMINAR COMPRA</Link> </Button></div> : null} */}
                        {/* {stateButton ? <div className="text-center mt-3"><Button variant="dark" onClick={() => context.push({item: {img: props.information[1], title:props.information[0], price:props.information[2] }, quantity: addToCar})}><Link to={`/cart`} className="text-white">TERMINAR COMPRA</Link> </Button></div> : null} */}
                        {stateButton ? <div className="text-center mt-3"><Button variant="dark" onClick={() => setCart([...cart, {item: {img: props.information[1], title:props.information[0], price:props.information[2],id: props.information[3] }, quantity: addToCar}])}><Link to={`/cart`} className="text-white">TERMINAR COMPRA</Link> </Button></div> : null}
                    </Card.Body>
                </Card>

        </>
    )
}

export default ItemDetail