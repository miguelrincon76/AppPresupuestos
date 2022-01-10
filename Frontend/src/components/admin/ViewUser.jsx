import * as React from 'react';
import { Apiurl } from '../../services/apiusuarios';
import * as Axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';

import Swal from 'sweetalert2';



const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid white',
        borderRadius: '5px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        padding: '20px 20px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos: {
        cursor: 'pointer'
    },
    inputMaterial: {
        width: '100%'
    }
}));

export default function ViewUser() {
    const styles = useStyles();
    const [users, setUsers] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [username, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [roles, setRoles] = React.useState('');
    const [selectedId, setSelectedId] = React.useState('');
    const [reloadUsers, setReloadUsers] = React.useState(false);
    const [modalDelete, setModalDelete] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const openCloseModalDelete = (_id = false) => {
        if (typeof _id === 'string') {
            setSelectedId(_id);
            setModalDelete(!modalDelete);
        }
        setModalDelete(!modalDelete);
    }
    /*Funciones que cambian el estado del formulario editar*/
    const handleChangeRole = (event) => {
        setRoles(event.target.value);
    }
    const handleChangeName = (event) => {
        setUserName(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }


    const token = sessionStorage.getItem('token');


    React.useEffect(() => {
        let token = sessionStorage.getItem('token');
        let ignore = false;
        async function getUsers() {
            const response = await fetch(`${Apiurl}/api/users/`, {
                method: 'POST', // or 'PUT'
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }
            });
            if (!response.ok)
                throw new Error("WARN", response.status);
            if (!ignore) setUsers(await response.json());
        }
        getUsers();
        setReloadUsers(false);
        return () => { ignore = true; }

    }, [reloadUsers])

    const handleUpdate = async () => {
        if (username === "" || email === "" || password === "" || roles === "") {
            setOpen(false);
            Swal.fire({
                icon: 'warning',
                title: 'Por favor insertar datos!',
                position: 'center'
            });
            return;
        };
        const newUser = { username, email, password, roles };

        const response = await fetch(`${Apiurl}/api/update${selectedId}`, {
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(newUser)
        });
        if (!response.ok)
            throw new Error("WARN", response.status);
        if (response.status === 204) {
            Swal.fire({
                icon: 'success',
                title: 'Usuario actualizado',
            });
            setOpen(false);
            setReloadUsers(true);
        }
    }

    const handleDelete = async () => {
        console.log("Estado del id", selectedId);
        const response = await fetch(`${Apiurl}/api/delete${selectedId}`, {
            method: 'DELETE', // or 'PUT'
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        });
        if (!response.ok)
            throw new Error("WARN", response.status);

        if (response.status === 200) {
            setReloadUsers(true);
            openCloseModalDelete();
        }
    }


    const getId = (id) => {
        handleClickOpen();
        setSelectedId(id);
        console.log(id);
    }

    const bodyDelete = (
        <div className={styles.modal}>
            <p>¿Estás seguro que deseas eliminar este usuario? </p>
            <div align="right">
                <Button color="secondary" onClick={handleDelete} >Sí</Button>
                <Button onClick={() => openCloseModalDelete()}>No</Button>

            </div>

        </div>
    );


    return (
        document.body.style = 'background: #f0f2f5',
        <>
            <TableContainer component={Paper} sx={{ width: '80%', height: '600px', marginLeft: '285px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">NOMBRE</TableCell>
                            <TableCell align="center">CORREO ELECTRÓNICO</TableCell>
                            <TableCell align="center">CONTRASEÑA</TableCell>
                            <TableCell align="center">ROL</TableCell>
                            <TableCell align="center">ACCIONES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell id="row-id" component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell align="center">{row.username}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.password}</TableCell>
                                <TableCell align="center">{row.roles}</TableCell>
                                <TableCell align="center"><Button onClick={() => getId(row._id)}><EditIcon sx={{ color: 'gray' }} /></Button><Button onClick={() => openCloseModalDelete(row._id)}><DeleteIcon sx={{ color: 'black' }} /></Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editar Usuario</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ingresar los siguientes datos para actualizar
                        el usuario.
                    </DialogContentText>

                    <TextField
                        margin="dense"
                        id="name"
                        label="Nombre"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChangeName}
                        required
                    />
                    <br />
                    <br />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Correo Electrónico"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleChangeEmail}
                        required
                    />
                    <br />
                    <br />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Contraseña"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={handleChangePassword}
                        required
                    />
                    <br />
                    <br />
                    <FormControl fullWidth required>
                        <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={roles}
                            label="Rol"
                            onChange={handleChangeRole}
                            required
                        >
                            <MenuItem value={'admin'}>Administrador</MenuItem>
                            <MenuItem value={'budgetary'}>Presupuestario</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <br />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={{ handleClose, handleUpdate }}>Actualizar</Button>
                </DialogActions>
            </Dialog>
            <Modal
                open={modalDelete}
                onClose={openCloseModalDelete}>
                {bodyDelete}
            </Modal>
        </>
    );
}