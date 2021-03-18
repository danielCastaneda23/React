import React, {Component} from "react";
import {Nav} from 'react-bootstrap';
import IconoFinal from './CartWidget';

export default class Navbar extends Component {
    render() {
        return (
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <IconoFinal />
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Primero</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Segundo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}