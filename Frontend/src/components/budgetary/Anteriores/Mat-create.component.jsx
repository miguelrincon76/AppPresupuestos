import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Container from "react-bootstrap/Container";

//servicios
import { Apiurl } from "../../../services/apiusuarios";

export class CreateMaterial extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeMaterialMaterialId =
      this.onChangeMaterialMaterialId.bind(this);
    this.onChangeMaterialCodigo = this.onChangeMaterialCodigo.bind(this);
    this.onChangeMaterialDescripcion =
      this.onChangeMaterialDescripcion.bind(this);
    this.onChangeMaterialUnidad = this.onChangeMaterialUnidad.bind(this);
    this.onChangeMaterialValorunit = this.onChangeMaterialValorunit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      materialId: "",
      codigo: "",
      descripcion: "",
      unidad: "",
      valorunit: 0,
    };
  }

  onChangeMaterialMaterialId(e) {
    this.setState({ materialId: e.target.value });
  }

  onChangeMaterialCodigo(e) {
    this.setState({ codigo: e.target.value });
  }

  onChangeMaterialDescripcion(e) {
    this.setState({ descripcion: e.target.value });
  }

  onChangeMaterialUnidad(e) {
    this.setState({ unidad: e.target.value });
  }

  onChangeMaterialValorunit(e) {
    this.setState({ valorunit: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const materialObject = {
      materialId: this.state.materialId,
      codigo: this.state.codigo,
      descripcion: this.state.descripcion,
      unidad: this.state.unidad,
      valorunit: this.state.valorunit,
    };
    let url = Apiurl + "/materiales/create-material";
    axios.post(url, materialObject).then((res) => console.log(res.data));

    // Redirect to Material List
    this.props.history.push("/material-list");
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="materialId">
              <Form.Label>MaterialId</Form.Label>
              <Form.Control
                type="text"
                value={this.state.materialId}
                onChange={this.onChangeMaterialMaterialId}
              />
            </Form.Group>

            <Form.Group controlId="codigo">
              <Form.Label>codigo</Form.Label>
              <Form.Control
                type="codigo"
                value={this.state.codigo}
                onChange={this.onChangeMaterialCodigo}
              />
            </Form.Group>

            <Form.Group controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={this.state.descripcion}
                onChange={this.onChangeMaterialDescripcion}
              />
            </Form.Group>
            <Form.Group controlId="unidad">
              <Form.Label>Unidad</Form.Label>
              <Form.Control
                type="text"
                value={this.state.unidad}
                onChange={this.onChangeMaterialUnidad}
              />
            </Form.Group>
            <Form.Group controlId="valorunit">
              <Form.Label>Valor Unitario</Form.Label>
              <Form.Control
                type="text"
                value={this.state.valorunit}
                onChange={this.onChangeMaterialValorunit}
              />
            </Form.Group>
            <Button variant="danger" size="lg" block="block" type="submit">
              Crear Materiales
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}
