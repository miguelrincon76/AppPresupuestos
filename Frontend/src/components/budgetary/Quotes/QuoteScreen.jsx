import React, { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Table, Container, Row, Col, Alert } from "react-bootstrap";
import { getQuoteById } from '../../../selectors/getQuotebyId';

import axios from "axios";
import { Apiurl } from "../../services/apiusuarios";

const QuoteScreen = props => {

    const { quoteId } = useParams();
    const navigate = useNavigate();
    // const [quote, setQuote] = useState([]);

    const { _id,
        cotizacionId,
        clienteId,
        proyecto,
        contenido,
        fecha,
        ciudad,
        proponenteId,
        activo } = useMemo(() => getQuoteById(_id), [_id])

    const dataTable = () => {

    }
    const deleteCotizacion = () => {
        let url = Apiurl + "/cotizaciones/delete-cotizacion/";
        axios
            .delete(url + this.props.obj._id)
            .then((res) => {
                console.log("Cotizacion successfully deleted!");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function AlertCreate() {
        const [show, setShow] = useState(false);
        return (
            <>
                <Alert show={show} variant="success">
                    <Alert.Heading></Alert.Heading>
                    <p>Desea crear una nueva cotización? </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-success">
                            Aceptar
                        </Button>
                        <br />
                        <Button onClick={() => setShow(false)} variant="outline-danger">
                            Cancelar
                        </Button>
                    </div>
                </Alert>
                {!show && <Button variant="outline-primary" onClick={() => setShow(true)}>CREAR NUEVA</Button>}
            </>
        );
    }


    return (

        <Container component="main">
            <div maxwidth="lg" align='center' style={{ border: '1px solid white', marginLeft: '250px', backgroundColor: 'white' }}>
                <div>
                    <Row>
                        <Col md={6}><h3>LISTADO DE COTIZACIONES</h3></Col>
                        <Col md={{ span: 4, offset: 2 }}>
                            <AlertCreate />
                        </Col>
                    </Row>
                    <hr />
                </div>
                <br />
                <br />
                <hr />
                <br />
            </div>
        </Container >
    )

}

export default QuoteScreen
