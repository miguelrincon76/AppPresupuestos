import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

//servicios
import { Apiurl } from "../../../services/apiusuarios";

export default class CotizacionTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteCotizacion = this.deleteCotizacion.bind(this);
  }

  deleteCotizacion() {
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

  render() {
    return (
      <tr>
        <td>{this.props.obj.cotizacionId}</td>
        <td>{this.props.obj.clienteId}</td>
        <td>{this.props.obj.proyecto}</td>
        <td>{this.props.obj.contenido}</td>
        <td>{this.props.obj.fecha}</td>
        <td>{this.props.obj.ciudad}</td>
        <td>{this.props.obj.proponenteId}</td>
        <td>
          <input type="checkbox" title="Activa/Inactiva" />
          {this.props.obj.activo}
        </td>
        <td>
          <Button
            href={"/edit-cotizacion/" + this.props.obj._id}
            size="sm"
            variant="dark"
          >
            Editar
          </Button>
          <Button onClick={this.deleteCotizacion} size="sm" variant="danger">
            Eliminar
          </Button>
        </td>
      </tr>
    );
  }
}
