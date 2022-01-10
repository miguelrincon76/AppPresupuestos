import React from "react";
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
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/cotizacion-list">Cotizaciones</Nav.Link>
                        <Nav.Link href="/presupuesto-list">Presupuestos</Nav.Link>
                        <Nav.Link href="/apu-list">APU's</Nav.Link>
                        <Nav.Link href="/material-list">Materiales</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
