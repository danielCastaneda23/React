import React, {Component} from "react";
import {Nav} from 'react-bootstrap';
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
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Categorias</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}