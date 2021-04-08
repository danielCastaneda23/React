import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import ThemeContext from '../context/cartContext';
import { Button } from "react-bootstrap";


const Item = (props) => {
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
        <Card style={{ width: '300px', marginLeft: '30px' }}>
            <Card.Img variant="top" src={props.item.thumbnail} alt=":)" height="200px" />
            <Card.Body>
                <Link to={`/item/${props.item.id}`} className="text-dark"><Card.Title>{props.item.title}</Card.Title></Link>
                <Card.Text>Precio: ${props.item.price}</Card.Text>
                {stockActual<=0 ? <div className="text-center"><b> No Hay Stock Suficiente: (10 productos)</b></div> :<ItemCount stock={stockActual} initial={1} onAdd={restaStock} /> }
                {/* {stateButton ? <div className="text-center mt-3"><Button variant="dark" onClick={() => context.addCar(addToCar)}><Link to={`/cart`} className="text-white">TERMINAR COMPRA</Link> </Button></div> : null} */}
                {/* {stateButton ? <div className="text-center mt-3"><Button variant="dark" onClick={() => context.push({item: {img: props.item.thumbnail, title:props.item.title, price:props.item.price}, quantity: addToCar})}><Link to={`/cart`} className="text-white">TERMINAR COMPRA</Link> </Button></div> : null} */}
                {stateButton ? <div className="text-center mt-3"><Link to={`/cart`} className="text-white"><Button variant="dark" onClick={() => setCart([...cart, {item: {img: props.item.thumbnail, title:props.item.title, price:props.item.price, id: props.item.id }, quantity: addToCar}])}>TERMINAR COMPRA</Button></Link></div> : null}
                </Card.Body>
        </Card>
    )
}
export default Item;