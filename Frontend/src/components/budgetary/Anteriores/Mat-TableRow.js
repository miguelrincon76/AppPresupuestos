import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
//servicios
import { Apiurl } from "../../../services/apiusuarios";

export default class MaterialTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteMaterial = this.deleteMaterial.bind(this);
  }

  deleteMaterial() {
    let url = Apiurl + "/materiales/delete-material/";
    axios
      .delete(url + this.props.obj._id)
      .then((res) => {
        console.log("Material successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.materialId}</td>
        <td>{this.props.obj.codigo}</td>
        <td>{this.props.obj.descripcion}</td>
        <td>{this.props.obj.unidad}</td>
        <td>{this.props.obj.valorunit}</td>
        <td>
          <Button
            href={"/edit-material/" + this.props.obj._id}
            size="sm"
            variant="dark"
          >
            Editar
          </Button>
          <Button onClick={this.deleteMaterial} size="sm" variant="danger">
            Eliminar
          </Button>
        </td>
      </tr>
    );
  }
}
