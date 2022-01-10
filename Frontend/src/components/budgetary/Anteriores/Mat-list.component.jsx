import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MaterialTableRow from "./Mat-TableRow";
import Container from "@mui/material/Container";
//servicios
import { Apiurl } from "../../../services/apiusuarios";

export class MaterialList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materiales: [],
    };
  }

  componentDidMount() {
    let url = Apiurl + "/materiales/";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          materiales: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.materiales.map((res, i) => {
      return <MaterialTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <Container component="main" maxWidth="lg">
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID Material</th>
                <th>Código</th>
                <th>Descripción</th>
                <th>Unidad</th>
                <th>Valor Unitario</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>
        </div>
      </Container>
    );
  }
}
