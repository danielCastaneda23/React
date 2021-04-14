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
        <div className="row mx-0">
            <Nav activeKey="/" className="fixed-top bg-dark text-white">
                <Nav.Item className="mt-2 ml-2">
                    <Link to={`/category/1`} >Home</Link>
                </Nav.Item>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <div>
                        <Link to={`/category/MCO-SURGICAL_AND_INDUSTRIAL_MASKS`} className="mx-3"> Tapabocas</Link>
                    </div>
                    <div>
                        <Link to={`/category/MCO-THERMOMETERS`} className="mx-3"> Termometros</Link>
                    </div>
                    <div>
                        <Link to={`/category/1`} className="mx-3">All</Link>
                    </div>
                </NavDropdown>
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