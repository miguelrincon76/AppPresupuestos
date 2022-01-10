import * as React from "react";

import Divider from "@mui/material/Divider";
import { Link, NavLink } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

export const drawerAdmin = (
  <div>
    <List>
      <Link to="/">
        <ListItem button key="Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      <NavLink to="/add">
        <ListItem button key="Add">
          <ListItemIcon>
            <PersonAddAltIcon />
          </ListItemIcon>
          <ListItemText primary="Agregar Usuarios" />
        </ListItem>
      </NavLink>
      <NavLink to="/view">
        <ListItem button key="Search">
          <ListItemIcon>
            <PersonSearchIcon />
          </ListItemIcon>
          <ListItemText primary="Ver Usuarios" />
        </ListItem>
      </NavLink>
    </List>
  </div>
);
