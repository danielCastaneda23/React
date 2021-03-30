import React, { Component } from "react";
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import IconoFinal from './CartWidget';

export default class Navbar extends Component {
    render() {
        return (
            <Nav
                activeKey="/"
            >
                <Nav.Item>
                    <IconoFinal />
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <div>
                    <Link to={`/category/MCO-SURGICAL_MASKS`} className="mx-3"> Tapabocas</Link>
                    </div>
                    <div>
                    <Link to={`/category/MCO-THERMOMETERS`} className="mx-3"> Termometros</Link>
                    </div>
                    <Nav.Link href="/">All</Nav.Link>
                </NavDropdown>
            </Nav>
        )
    }
}