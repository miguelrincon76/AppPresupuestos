import React from "react";
//import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Ingenieria S.A.</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/cotizacion-list">Cotizaciones</Nav.Link>
                        <Nav.Link href="/presupuesto">Presupuestos</Nav.Link>
                        <Nav.Link href="/apu">APU's</Nav.Link>
                        <Nav.Link href="/material-list">Materiales</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
