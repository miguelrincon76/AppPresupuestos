import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import logo from "../../../assets/img/logo.png";
import Button from "react-bootstrap/Button";
import { Apiurl } from "../../../services/apiusuarios";
import CotizacionTableRow from "./Cot-TableRow";
import Container from "@mui/material/Container";

export class CotizacionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cotizaciones: [],
    };
  }

  componentDidMount() {
    let url = Apiurl + "/cotizaciones/";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          cotizaciones: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.cotizaciones.map((res, i) => {
      return <CotizacionTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (
      <Container component="main" maxwidth="lg" align='center' style={{ border: '1px solid white', marginLeft: '250px', backgroundColor: 'white' }}>
        <br />
        <hr />
        <h1 id="title">INGENIERIA S.A.</h1>
        <h2 id="title">Cuadro de Cotización</h2>
        <br />
        <br />
        <div id="icon-proyect">
          <img src={logo} alt="proyect icon" />
        </div>
        <hr />
        <br />
        <Container >
          <h3 id="title">I. INFORMACIÓN DEL PROYECTO</h3>
          <div id='button-file'>
            <Button variant="outline-primary">CARGAR ARCHIVO CANTIDADES</Button>{' '}
            <Button variant="outline-secondary">EDICIÓN</Button>{' '}
          </div>
          <br />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th># COT:</th>
                <th>Cliente:</th>
                <th>Proyecto:</th>
                <th>Contiene:</th>
                <th>Fecha:</th>
                <th>Ciudad:</th>
                <th>Proponente:</th>
                <th>Estado:</th>
                <th>Action:</th>
              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
          <br />
          <hr />
          <br />
          <div>
            <h3 id="title">II. CUADRO DE COSTOS DIRECTOS</h3>
            <Button id='button-file' variant="outline-primary">CARGAR ARCHIVO A.I.U.</Button>{' '}
            <br />
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>DESCRIPCIÓN</th>
                  <th>UNIDAD</th>
                  <th>CANTIDAD</th>
                  <th>VALOR UNITARIO</th>
                  <th>VALOR TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id='centered-row' colSpan="4">SUBTOTAL COSTOS DIRECTOS</td>
                  <td id='centered-row' colSpan="2">150000</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h3 id="title">III. CUADRO DE COSTOS INDIRECTOS</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>DESCRIPCIÓN</th>
                  <th>PORCENTAJE</th>
                  <th>VALOR TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id='centered-row' colSpan="2">SUBTOTAL COSTOS INDIRECTOS</td>
                  <td id='centered-row' >150000</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <br />
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th id='centered-row'><h4>VALOR TOTAL COTIZACIÓN</h4></th>
                <th id='centered-row'><h4>450000</h4></th>
              </tr>
            </thead>
          </Table>
        </Container>
      </Container >

    )
  }
}

