import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import ThemeContext from '../context/cartContext';
import { Button } from "react-bootstrap";


const Item = (props) => {
    const [stockActual, setstockActual] = useState(props.item.available_quantity)
    const [stateButton, setStateButton] = useState(false)
    const [addToCar, setAddToCar] = useState(0)
    const { cart, setCart} = useContext(ThemeContext)
    const [hide, setHide] = useState(false)

    const restaStock = (e, RestaValor) => {
        setStateButton(true)
        setstockActual((stockActual - RestaValor) < 0 ? stockActual : stockActual - RestaValor)
        setAddToCar(RestaValor);
        setHide(true);
    }
    const carrito = () => {

        setCart(() => {
                return (
                    [...cart,
                    {
                        item: {
                            img: props.item.thumbnail,
                            title: props.item.title,
                            price: props.item.price,
                            id: props.item.id
                        },
                        quantity: addToCar
                    }
                    ]
                )
        })
    }
    return (
        <Card style={{ width: '230px',height:'380px', border : '0px', margin: 'auto'}}>
            <Card.Img variant="top" src={props.item.thumbnail} alt=":)" height="100px" />
            <Card.Body>
                <Link to={`/item/${props.item.id}`} className="text-dark" ><Card.Title className="h6" style={{height: '45px'}}>{props.item.title}</Card.Title></Link>
                <Card.Text>Precio: ${props.item.price}</Card.Text>
                {stockActual <= 0 ? <div className="text-center mb-3 pb-4"><b> No Hay Stock Suficiente: ({stockActual} productos)</b></div> : <ItemCount stock={stockActual} initial={1} onAdd={restaStock} hideButton={hide} />}
                {stateButton ? <div className="text-center"><Link to={`/cart`} className="text-white"><Button variant="dark" onClick={() => carrito()}>TERMINAR COMPRA </Button></Link></div> : null}
            </Card.Body>
        </Card>
    )
}
export default Item;