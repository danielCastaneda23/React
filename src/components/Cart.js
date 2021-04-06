import {useContext} from 'react';
import ThemeContext from "../context/cartContext";
const Cart = () =>{
    const {cart, setCart} = useContext(ThemeContext)
    return(
        <div className="mt-5">CompraFinalizada
        {console.log(cart)}
        </div>
    )
}
export default Cart;