import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import * as Axios from 'axios';
import React, { useState } from 'react'
import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Swal from 'sweetalert2';
import {Apiurl} from '../../services/apiusuarios';
export const AddUser = () => {
    const[username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [roles, setRoles] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (username === "" || email === "" || password === "" || roles  === "") {
            Swal.fire({
                icon:'warning',
                title: 'Por favor insertar datos!',
              })
              return;
        }
        const token = sessionStorage.getItem("token")
        let user = {username, email, password, roles}
        const response = await Axios.post(`${Apiurl}/api/user`,user,
        {headers:{'Content-Type':'application/json','x-access-token':token}
    })
    let message = response.data.message
    if (message === "The user already exists") {
        
        Swal.fire({
            icon:'error',
            title: 'Este usuario ya existe',
            showConfirmButton: false,
            timer: 1500
          })
         
    }else if(message === "The email already exists"){
        Swal.fire({
            icon:'error',
            title: 'Este correo electrónico ya existe',
            showConfirmButton: false,
            timer: 1500
          })
          
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Usuario creado',
          })
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          setRoles('')
    }
    }

    const handleChangeUserName = (event) => {
        setUserName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleData = () => {

    }
    const handleChangeRole = (event) => {
        setRoles(event.target.value)
    }

    return (
        document.body.style = 'background: #f0f2f5',
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Paper elevation={3} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <br />
                <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                    REGISTRO DE USUARIOS
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ alignItems: 'center', mt: 1, padding: '0px 50px' }} >

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nombres"
                        name="nombres"
                        type="text"
                        autoFocus
                        variant="outlined"
                        onChange={handleChangeUserName}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        type="email"
                        autoFocus
                        variant="outlined"
                        onChange={handleChangeEmail}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Contraseña"
                        name="password"
                        type="password"
                        autoFocus
                        variant="outlined"
                        onChange={handleChangePassword}
                    />
                    <br/>
                    <br/>
                    <FormControl fullWidth required>
                        <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={roles}
                            label="Rol"
                            onChange={handleChangeRole}
                        >
                            <MenuItem value={'admin'}>Administrador</MenuItem>
                            <MenuItem value={'budgetary'}>Presupuestario</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <br/>
                    <Box sx={{ textAlign: "center" }}>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={handleData}
                        >
                            AGREGAR
                        </Button>
                        <br/>
                    <br/>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
