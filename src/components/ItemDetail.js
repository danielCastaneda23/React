
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import { useContext, useEffect, useState } from 'react';
import ThemeContext from "../context/cartContext";

const ItemDetail = (props) => {
    const [stockActual, setstockActual] = useState('')
    const [stateButton, setStateButton] = useState(false)
    const [addToCar, setAddToCar] = useState(0)
    const [hide , setHide] = useState(false)
    const { cart, setCart } = useContext(ThemeContext)
    useEffect(() => {
        setstockActual(props.information[4])
    },[props.information[4]])

    const restaStock = (e, RestaValor) => {
        setStateButton(true)
        setstockActual((stockActual - RestaValor) < 0 ? stockActual : stockActual - RestaValor)
        setAddToCar(RestaValor);
        setHide(true)
    }


    return (

        <>
            <Card style={{ width: '800px', marginTop: '50px' }}>
                <Card.Img variant="top" src={props.information[1]} alt=":)" height="500px" />
                <Card.Body>
                    <Card.Title>{props.information[0]}</Card.Title>
                    <Card.Text>Precio: ${props.information[2]}</Card.Text>
                    {stockActual <= 0 ? <div className="text-center"><b> No Hay Stock Suficiente: ({stockActual} productos)</b></div> : <ItemCount stock={stockActual} initial={1} onAdd={restaStock} hideButton={hide}/>}
                    {stateButton ? <div className="text-center "><Link to={`/cart`} className="text-white"><Button variant="dark" onClick={() => setCart([...cart, { item: { img: props.information[1], title: props.information[0], price: props.information[2], id: props.information[3] }, quantity: addToCar }])}>TERMINAR COMPRA </Button></Link></div> : null}
                </Card.Body>
            </Card>

        </>
    )
}

export default ItemDetail