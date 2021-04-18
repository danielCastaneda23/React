import React, { useContext, useEffect, useState } from "react";
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ThemeContext from "../context/cartContext";
import IconoFinal from './CartWidget';


const Navbar = () => {
    const [total2, setTotal2] = useState(0)
    const { cart, setCar } = useContext(ThemeContext)
    useEffect(() => {
        let x = 0;
        for (let i = 0; i < cart.length; i++) {
            x = x + cart[i].quantity
        }
        setTotal2(x)
    }, [cart]);
    return (
        <div className="row mx-0 pt-3 justify-content-center">
            {/* fixed-top */}
            <Nav activeKey="/" className=" bg-white align-items-center">
                <Nav.Item className="mt-2 mx-5 px-5"><Link to={`/category/1`} ><img src="/logo.png" alt=":)" width="auto" height="80px"></img></Link></Nav.Item>
                <Nav.Item><Link to={`/category/MCO-SURGICAL_AND_INDUSTRIAL_MASKS`} className="mx-5 px-5 h5" style={{color: 'rgb(24,192,191)'}}> Tapabocas</Link></Nav.Item>
                <Nav.Item><Link to={`/category/MCO-THERMOMETERS`} className="mx-5 px-5 h5" style={{color: 'rgb(24,192,191)'}}> Termometros</Link></Nav.Item>
                <Nav.Item className="ml-auto pr-5 pt-2" >
                    {cart.length === 0 ? <></> : <>
                        <Link to={`/cart`}><IconoFinal /></Link>
                        <b>Elementos en carro: {total2}</b></>}
                </Nav.Item>

            </Nav>
        </div>
    )
}
export default Navbar