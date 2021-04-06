import React from "react";
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import IconoFinal from './CartWidget';


const Navbar = () => {

    return (
        <Nav
            activeKey="/" className="fixed-top"
        >
            <Nav.Item className="mt-2 ml-2">
                <Link to={`/category/1`} >Home</Link>
            </Nav.Item>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                <div>
                    <Link to={`/category/MCO-SURGICAL_MASKS`} className="mx-3"> Tapabocas</Link>
                </div>
                <div>
                    <Link to={`/category/MCO-THERMOMETERS`} className="mx-3"> Termometros</Link>
                </div>
                <div>
                    <Link  to={`/category/1`} className="mx-3">All</Link>
                </div>
            </NavDropdown>
            <Nav.Item className="mt-2">
                <IconoFinal />
                <b>Elementos en carro: </b>
            </Nav.Item>
        </Nav>
    )
}
export default Navbar