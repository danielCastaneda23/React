import { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ThemeContext from "../context/cartContext";
const Cart = () => {
    const { cart, setCart } = useContext(ThemeContext)
    let total = 0;
    let contador = 0;
    useEffect(() => {
        setCart(() => {
            if (cart.length > 1) {
                for (let i = 0; i < cart.length; i++) {
                    contador += 1;
                    for (let j = contador; j < cart.length; j++) {
                        if (cart[j] !== "" && cart[i] !== "") {
                            if (cart[i].item.id === cart[j].item.id) {
                                cart[i].quantity = cart[i].quantity + cart[j].quantity;
                                cart.splice(j, 1, '')
                            }
                        }
                    }
                }
                for (let k = 0; k < cart.length; k++)  if (cart[k] === "") cart.splice(k, 1)
                return (
                    [...cart]
                )
            } else { return [...cart] }
        })
    }, [])
    const eliminar = (id) =>{
        setCart(() => {
            return(
                cart.filter((x) => x.item.id !== id ? x : null)
            )
        }
        )
    }
    return (<>
        {cart.map((x) => {
            if (x !== "")
                return (
                    <div className="row mx-0 mt-5 pt-5">
                        <div className="col-4 text-center">
                            <div className="row mx-0 justify-content-center">
                                <div className="col-9 mx-0"><img src={x.item.img} alt=":)" width="100" height="auto"></img><Button variant="btn btn-primary mb-5 ml-2" onClick={() => eliminar(x.item.id)} >x</Button></div>
                            </div>
                            <div className="row mx-0 justify-content-center">{x.item.title}</div>
                        </div>
                        <div className="col-4 mt-5 text-center">Cantidad: {x.quantity}</div>
                        <div className="col-4 mt-5 text-center">Precio Unitario: {x.item.price}</div>
                        <div hidden>{total = total + (x.item.price * x.quantity)}</div>
                    </div>
                )
        })}
        {cart.length !== 0 ? <>
        <hr style={{ width: '90%', height: '1px', backgroundColor: '#666', marginTop: '80px' }}></hr>
        <div className="row mx-0">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4 text-center"> <b>Precio total: {total}  </b></div>
        </div> </>: <>
        <div className=" h1 row mx-0 mt-5 pt-5 bold justify-content-center">EL CARRITO SE ENCUENTRA VACIO</div>
        <div className="row mx-0 justify-content-center"><Link to={`/category/1`}><Button variant="btn btn-dark mt-5"><h1>VOLVER A TIENDA</h1> </Button> </Link></div>
        </>
        }
    </>
    )
}
export default Cart;