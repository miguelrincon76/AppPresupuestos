
import React from "react";
import logo from "../assets/img/logo.png";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const theme = createTheme();

export const Home = () => {
    return (
        document.body.style = 'background: #f0f2f5',
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs" >
                <Paper elevation={3}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <br />
                            <br />
                            <h1 id="title">INGENIERIA S.A.</h1>
                            <br />
                            <br />
                            <div id="icon-proyect">
                                <img src={logo} alt="proyect icon" />

                            </div>
                            <br />
                            <br />
                        </div>
                    </Box>
                </Paper>
            </Container>

        </ThemeProvider>
    )
}



/*export default function Home() {
    return (

    );

}*/
