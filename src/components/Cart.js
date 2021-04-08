import { useContext, useState } from 'react';
import ThemeContext from "../context/cartContext";
const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const { cart, setCart } = useContext(ThemeContext)
    let total = 0;
    let arrayNew = [];

    // for (let i = 0; i < cart.length; i++) {
    //     for (let j = 0; j < cart.length; j++) {
    //         if(cart[i]=== cart[j+1]) setCart
            
    //     }
        
    // }
    // if (cart.length > 1) {
    //     for (let i = 0; i < cart.length; i++) {
    //         console.log('entro a i',cart.length,i)
    //         if (cart.length > 1) {
    //             for (let j = 1; j < cart.length; j++) {
    //                 console.log('entro a j', cart.length, j)
    //                 if (cart[j + i] !== undefined) {
    //                     if (cart[i].item.id === cart[j + i].item.id) {
    //                         // cart.splice(cart[j+i], 1)
    //                         console.log(cart.length)
    //                     } else { 
    //                         console.log('no es igual') 
    //                         arrayNew.push(cart[i])
    //                     }
    //                 }
    //             }
    //         }
    //     }
        // setCart(arrayNew)
    //}
console.log(arrayNew)
return (<>
    {cart.map((x) => {
        return (
            <div className="row mx-0 mt-5 pt-5">
                <div className="col-4 text-center">
                    <img src={x.item.img} alt=":)" width="100" height="auto"></img>
                    <div>{x.item.title}</div>
                </div>
                <div className="col-4 mt-5 text-center">Cantidad: {x.quantity}</div>
                <div className="col-4 mt-5 text-center">Precio Unitario: {x.item.price}</div>
                <div hidden>{total = total + (x.item.price * x.quantity)}</div>
            </div>
        )
    })}
    <hr style={{ width: '90%', height: '1px', backgroundColor: '#666', marginTop: '80px' }}></hr>
    <div className="row mx-0">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4 text-center"> <b>Precio total: {total}  </b></div>
    </div>
</>
)
}
export default Cart;