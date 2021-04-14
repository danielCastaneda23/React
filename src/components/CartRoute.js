import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ThemeContext from '../context/cartContext';
import { Form, FormGroup } from 'react-bootstrap'
import { getFirestore } from '../configs/firebase'
import 'firebase/firestore'
import firebase from 'firebase/app'

const CartRoute = () => {
    const { cart, setCart } = useContext(ThemeContext)
    const [total2, setTotal2] = useState(0)
    const [db,setDb] = useState(getFirestore())
    useEffect(() => {
        let x = 0;
        for (let i = 0; i < cart.length; i++) {
            x = x + (cart[i].item.price*cart[i].quantity)
        }
        setTotal2(x)
    },[])
    const obtenerDatos = () => {
        const newOrder = {
            buyer: { name: document.getElementById('Name').value, phone: document.getElementById('Phone').value, email: document.getElementById('Email').value },
            products: [
                ...cart
            ],
            createon: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total2
        }
        const orders = db.collection("orders");
        orders.add(newOrder).then((resp) => {
            console.log(resp.id)
        })

    }
    return (
        <>
            <div className="row mt-5 pt-5 justify-content-center">
                <Form style={{ width: '500px' }}>
                    <FormGroup controlId="Name">
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control type="name" placeholder="Ingrese Su nombre" />
                    </FormGroup>
                    <FormGroup controlId="Phone">
                        <Form.Label>Celular: </Form.Label>
                        <Form.Control type="number" placeholder="Ingrese Su Numero Telefonico" />
                    </FormGroup>
                    <FormGroup controlId="Email">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Ingrese Su Email" />
                    </FormGroup>
                    <div className=" row justify-content-center">
                        <Button className="text-center" variant="primary" onClick={() => obtenerDatos()}>
                            Enviar Orden
                    </Button>
                    </div>

                </Form>
            </div>
        </>
    )
}
export default CartRoute