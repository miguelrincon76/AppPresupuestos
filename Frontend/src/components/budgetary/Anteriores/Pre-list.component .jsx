import React from 'react'
import Container from "@mui/material/Container";
import ApuList from "../Anteriores/Apu-list.component";

const PreListComponent = () => {
  return (
    <Container component="main" maxWidth="lg">

      <div>
        Hello Word DESDE PRESUPUESTO LIST
        <ApuList />
      </div>
    </Container>
  )
}

export default PreListComponent
