import React from 'react'
import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import WarningIcon from '@mui/icons-material/Warning';
import { useNavigate } from 'react-router-dom';

//const drawerWidth = 240;
export const Error404 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  }

  return (
    /*     <Box sx={{ display: 'flex', border: "1px black solid" }} > */
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3,/*  width: { sm: `calc(100% - ${drawerWidth}px)` } */ float: "right", paddingRight: "300px" }}
    >

      <Button
        onClick={handleBack}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >Volver</Button>

      <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', alignContent: "center" }}>
        404
      </Typography>
      <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
        The page you were looking for is not found!
      </Typography>
      <Typography paragraph sx={{ fontWeight: 'bold' }}>
        <WarningIcon />You may have mistyped the address or the page may have moved.
      </Typography>
    </Box>
    /*     </Box> */



  )
}



