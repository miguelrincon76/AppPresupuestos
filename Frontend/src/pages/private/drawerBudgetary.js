import * as React from "react";

import Divider from "@mui/material/Divider";
import { Link, NavLink } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TableViewIcon from "@mui/icons-material/TableView";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TableRowsIcon from "@mui/icons-material/TableRows";

export const drawerBudgetary = (
  <div component="main">
    <List>
      <ListItem button key="Home">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/">
          <ListItemText primary="Inicio" />
        </Link>
      </ListItem>
    </List>
    <Divider />
    <List>
      <NavLink to="/quotes">
        <ListItem button key="Quotelist">
          <ListItemIcon>
            <TableViewIcon />
          </ListItemIcon>
          <ListItemText primary="Cotizaciones" />
        </ListItem>
      </NavLink>
      <hr />
      <NavLink to="/cotizacion-list">
        <ListItem button key="Search">
          <ListItemIcon>
            <TableViewIcon />
          </ListItemIcon>
          <ListItemText primary="Ver Cotización" />
        </ListItem>
      </NavLink>

      <NavLink to="/create-cotizacion">
        <ListItem button key="AddCot">
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Agregar Cotización" />
        </ListItem>
      </NavLink>

      <NavLink to="/presupuesto-list">
        <ListItem button key="preList">
          <ListItemIcon>
            <TableRowsIcon />
          </ListItemIcon>
          <ListItemText primary="Ver Presupuestos" />
        </ListItem>
      </NavLink>

      <NavLink to="/create-presupuesto">
        <ListItem button key="createpre">
          <ListItemIcon>
            <TableRowsIcon />
          </ListItemIcon>
          <ListItemText primary="Agregar Presupuesto" />
        </ListItem>
      </NavLink>

      <NavLink to="/apu-list">
        <ListItem button key="apuList">
          <ListItemIcon>
            <TableRowsIcon />
          </ListItemIcon>
          <ListItemText primary="Ver Apu" />
        </ListItem>
      </NavLink>

      <NavLink to="/create-apu">
        <ListItem button key="createapu">
          <ListItemIcon>
            <TableRowsIcon />
          </ListItemIcon>
          <ListItemText primary="Agregar Apu" />
        </ListItem>
      </NavLink>

      <NavLink to="/material-list">
        <ListItem button key="Materials">
          <ListItemIcon>
            <EngineeringIcon />
          </ListItemIcon>
          <ListItemText primary="Ver Materiales" />
        </ListItem>
      </NavLink>

      <NavLink to="/create-material">
        <ListItem button key="CreateMaterials">
          <ListItemIcon>
            <EngineeringIcon />
          </ListItemIcon>
          <ListItemText primary="Agregar Material" />
        </ListItem>
      </NavLink>
    </List>
  </div>
);
