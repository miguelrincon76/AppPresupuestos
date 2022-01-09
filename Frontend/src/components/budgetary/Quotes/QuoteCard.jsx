import React, { useState, useMemo } from 'react'
import { Link } from "react-router-dom";


export const QuoteCard = ({
    _id,
    cotizacionId,
    clienteId,
    proyecto,
    contenido,
    fecha,
    ciudad,
    proponenteId,
    activo
}) => {

    return (

        <div className="col">
            <div className="card h-100">

                <div className="card-body">
                    <h5>
                        {clienteId}
                    </h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> {cotizacionId} </li>
                        <li className="list-group-item"> {proyecto} </li>
                    </ul>
                </div>

                <div className="card-footer">
                    <small className="text-muted">
                        <Link to={'/'}>
                            Saber más...
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    )
}
