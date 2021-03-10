import { useState } from "react";
import { Button, Form } from "react-bootstrap";



const ItemCount = (props) => {
    const [valorDigitado, valorActualDigitado] = useState(props.initial)
    return (
        <div className="row justify-content-center mx-0">
            <div className="col-3 px-0 mt-4 pt-2 text-right"><Button variant="btn btn-primary" onClick={() => valorActualDigitado(valorDigitado + 1)}>+</Button></div>
            <div className="col-6 text-center px-0">
                <Form>
                    <Form.Group>
                        <Form.Label>Stock total: {props.stock}</Form.Label>
                        <Form.Control className="text-center" type="text" value={valorDigitado}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={(e) => (props.onAdd(e, valorDigitado))}>Agregar Carrito</Button>
                </Form>
            </div>
            <div className="col-3 px-0 mt-4 pt-2"><Button variant="btn btn-primary" onClick={(e) => valorDigitado <= 0 ? '' : valorActualDigitado(valorDigitado - 1)}>-</Button></div>
        </div>
    )
};

export default ItemCount;