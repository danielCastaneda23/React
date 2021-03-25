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
                    <NavDropdown.Item><Link to={`/category/MCO-SURGICAL_MASKS`}>Tapabocas</Link> </NavDropdown.Item>
                    <NavDropdown.Item><Link to={`/category/MCO-THERMOMETERS`}>Termometros</Link></NavDropdown.Item>
                    <NavDropdown.Item href="/">All</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}