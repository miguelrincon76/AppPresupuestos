import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import TableViewIcon from '@mui/icons-material/TableView';
//import { Outlet } from 'react-router'
import AddBoxIcon from '@mui/icons-material/AddBox';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { AuthContext } from '../../context/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
const drawerWidth = 240;

function DashboardBudgetary(props) {
  const { user: { name }, dispatch } = React.useContext(AuthContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  /*  const handleChange = (event) => {
     setAuth(event.target.checked);
   }; */

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    navigate('/login')
    sessionStorage.clear()
    dispatch({
      type: types.logout
    });
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar><span>PRESUPUESTOS</span></Toolbar>

      <Divider />
      <List>
        <ListItem button key='Home'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link to="/"><ListItemText primary='Inicio' /></Link>
        </ListItem>

        {/*    {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        <NavLink to="/quotes">
          <ListItem button key='Quotelist'>
            <ListItemIcon>
              <TableViewIcon />
            </ListItemIcon>
            <ListItemText primary='Cotizaciones' />
          </ListItem>
        </NavLink>
        <hr />
        <NavLink to="/cotizacion-list">
          <ListItem button key='Search'>
            <ListItemIcon>
              <TableViewIcon />
            </ListItemIcon>
            <ListItemText primary='Ver Cotización' />
          </ListItem>
        </NavLink>

        <NavLink to="/create-cotizacion">
          <ListItem button key='AddCot'>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary='Agregar Cotización' />
          </ListItem>
        </NavLink>

        <NavLink to="/presupuesto-list">
          <ListItem button key='preList'>
            <ListItemIcon>
              <TableRowsIcon />
            </ListItemIcon>
            <ListItemText primary='Ver Presupuestos' />
          </ListItem>
        </NavLink>

        <NavLink to="/create-presupuesto">
          <ListItem button key='createpre'>
            <ListItemIcon>
              <TableRowsIcon />
            </ListItemIcon>
            <ListItemText primary='Agregar Presupuesto' />
          </ListItem>
        </NavLink>

        <NavLink to="/apu-list">
          <ListItem button key='apuList'>
            <ListItemIcon>
              <TableRowsIcon />
            </ListItemIcon>
            <ListItemText primary='Ver Apu' />
          </ListItem>
        </NavLink>

        <NavLink to="/create-apu">
          <ListItem button key='createapu'>
            <ListItemIcon>
              <TableRowsIcon />
            </ListItemIcon>
            <ListItemText primary='Agregar Apu' />
          </ListItem>
        </NavLink>

        <NavLink to="/material-list">
          <ListItem button key='Materials'>
            <ListItemIcon>
              <EngineeringIcon />
            </ListItemIcon>
            <ListItemText primary='Ver Materiales' />
          </ListItem>
        </NavLink>

        <NavLink to="/create-material">
          <ListItem button key='CreateMaterials'>
            <ListItemIcon>
              <EngineeringIcon />
            </ListItemIcon>
            <ListItemText primary='Agregar Material' />
          </ListItem>
        </NavLink>


        {/*  {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu

              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleLogout}>Salir</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

DashboardBudgetary.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardBudgetary;
