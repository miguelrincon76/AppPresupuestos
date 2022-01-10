import React, { useMemo, useState } from 'react'
import logo from "../../../assets/img/logo.png";
import { getQuoteByProponente } from '../../../selectors/getQuoteByProponente';
import { QuoteCard } from "./QuoteCard";

//Servicios
import axios from "axios";


export const QuoteList = ({ proponenteId }) => {


    const quotes = useMemo(() => getQuoteByProponente(proponenteId), [proponenteId])

    return (
        <div
            className='container'
            component="main"
            maxwidth="lg"
            align='center'
            style={{ border: '1px solid gray', backgroundColor: 'white' }}
        >
            <br />
            <h1 id="title">INGENIERIA S.A.</h1>
            <h2 id="title">Cuadro de Cotización</h2>
            <br />
            <br />
            <div id="icon-proyect">
                <img src={logo} alt="proyect icon" />
            </div>
            <hr />
            <br />
            <div >
                <h3 id="title">I. INFORMACIÓN DEL PROYECTO</h3>
                <div id='button-file'>
                    <button className="btn btn-outline-primary">CARGAR ARCHIVO CANTIDADES</button>{' '}
                    <button className="btn btn-outline-secondary">EDICIÓN</button>{' '}
                </div>
                <br />
                <br />
                <table className='table table-bordered table-hover table-striped table-active'>
                    <thead>
                        <tr align='center'>
                            <th># COT</th>
                            <th>CLIENTE</th>
                            <th>PROYECTO</th>
                            <th>CONTENIDO</th>
                            <th>FECHA</th>
                            <th>CIUDAD</th>
                            <th>PROPONENTE</th>
                            <th>ESTADO</th>
                            <th>ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*{this.DataTable()} */}
                    </tbody>
                </table>
                <hr />
            </div>


            <div className="row row-cols-1">
                {
                    quotes.map(quote => (
                        <QuoteCard key={quote._id} {...quote} />
                    ))
                }

            </div>
        </div >
    )
}

