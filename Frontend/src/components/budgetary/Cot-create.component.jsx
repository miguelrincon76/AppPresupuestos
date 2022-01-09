import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Container from "react-bootstrap/Container";

//servicios
import { Apiurl } from "../../services/apiusuarios";

export class CreateCotizacion extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangeCotizacionCotizacionId =
      this.onChangeCotizacionCotizacionId.bind(this);
    this.onChangeCotizacionClienteId = this.onChangeCotizacionClienteId.bind(this);
    this.onChangeCotizacionProyecto =
      this.onChangeCotizacionProyecto.bind(this);
    this.onChangeCotizacionContenido = this.onChangeCotizacionContenido.bind(this);
    this.onChangeCotizacionFecha = this.onChangeCotizacionFecha.bind(this);
    this.onChangeCotizacionCiudad = this.onChangeCotizacionCiudad.bind(this);
    this.onChangeCotizacionProponenteId = this.onChangeCotizacionProponenteId.bind(this);
    this.onChangeCotizacionActivo = this.onChangeCotizacionActivo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      cotizacionId: "",
      clienteId: "",
      proyecto: "",
      contenido: "",
      fecha: "",
      ciudad: "",
      proponenteId: "",
      activo: true,
    };
  }


  onChangeCotizacionCotizacionId(e) {
    this.setState({ cotizacionId: e.target.value });
  }

  onChangeCotizacionClienteId(e) {
    this.setState({ clienteId: e.target.value });
  }

  onChangeCotizacionProyecto(e) {
    this.setState({ proyecto: e.target.value });
  }

  onChangeCotizacionContenido(e) {
    this.setState({ contenido: e.target.value });
  }

  onChangeCotizacionFecha(e) {
    this.setState({ fecha: e.target.value });
  }
  onChangeCotizacionCiudad(e) {
    this.setState({ ciudad: e.target.value });
  }
  onChangeCotizacionProponenteId(e) {
    this.setState({ proponenteId: e.target.value });
  }
  onChangeCotizacionActivo(e) {
    this.setState({ activo: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const cotizacionObject = {
      cotizacionId: this.state.cotizacionId,
      clienteId: this.state.clienteId,
      proyecto: this.state.proyecto,
      contenido: this.state.contenido,
      fecha: this.state.fecha,
      ciudad: this.state.ciudad,
      proponenteId: this.state.proponenteId,
      activo: this.state.activo,
    };
    let url = Apiurl + "/cotizaciones/create-cotizacion";
    axios
      .post(url, cotizacionObject)
      .then((res) => {
        console.log(res.data);
      });

    // Redirect to Cotizacion List
    this.props.history.push("/cotizacion-list");

  }

  render() {
    return (
      <Container component="main" maxWidth="lg">
        <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="cotizacionId">
              <Form.Label># Cotización</Form.Label>
              <Form.Control
                type="text"
                value={this.state.cotizacionId}
                onChange={this.onChangeCotizacionCotizacionId}
              />
            </Form.Group>

            <Form.Group controlId="cliente">
              <Form.Label>cliente</Form.Label>
              <Form.Control
                type="cliente"
                value={this.state.clienteId}
                onChange={this.onChangeCotizacionClienteId}
              />
            </Form.Group>

            <Form.Group controlId="proyecto">
              <Form.Label>Proyecto</Form.Label>
              <Form.Control
                type="text"
                value={this.state.proyecto}
                onChange={this.onChangeCotizacionProyecto}
              />
            </Form.Group>
            <Form.Group controlId="contenido">
              <Form.Label>Contenido</Form.Label>
              <Form.Control
                type="text"
                value={this.state.contenido}
                onChange={this.onChangeCotizacionContenido}
              />
            </Form.Group>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                value={this.state.fecha}
                onChange={this.onChangeCotizacionFecha}
              />
            </Form.Group>
            <Form.Group controlId="ciudad">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                value={this.state.ciudad}
                onChange={this.onChangeCotizacionCiudad}
              />
            </Form.Group>
            <Form.Group controlId="proponenteId">
              <Form.Label>Proponente:</Form.Label>
              <Form.Control
                type="text"
                value={this.state.proponenteId}
                onChange={this.onChangeCotizacionProponenteId}
              />
            </Form.Group>
            <Form.Group controlId="activo">
              <Form.Label>Activo</Form.Label>
              <Form.Control
                type="text"
                value={this.state.activo}
                onChange={this.onChangeCotizacionActivo}
              />
            </Form.Group>
            <Button variant="danger" size="lg" block="block" type="submit">
              Crear Cotizacion
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}
