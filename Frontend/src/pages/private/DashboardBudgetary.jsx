import * as React from 'react';
import PropTypes from 'prop-types';
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
import Stack from '@mui/material/Stack';
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

import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


function DashboardBudgetary(props) {
  const { user: { name }, dispatch } = React.useContext(AuthContext);
  const { window } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div component='main'>
      <List>
        <ListItem button key='Home'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link to="/"><ListItemText primary='Inicio' /></Link>
        </ListItem>
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
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (

    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                APP GESTION DE OBRAS
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

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            {drawer}
          </Drawer>
        </ThemeProvider >
      </Stack >
      <Main open={open}>
        <DrawerHeader />
      </Main>

    </Box >
  );

}

export default DashboardBudgetary;
