import React, { useMemo, useState } from 'react'
import { getQuoteByProponente } from '../../../selectors/getQuoteByProponente';
import { QuoteCard } from "./QuoteCard";

//Servicios
import { Apiurl } from "../../../services/apiusuarios";
import axios from "axios";


export const QuoteList = ({ proponenteId }) => {


    const quotes = useMemo(() => getQuoteByProponente(proponenteId), [proponenteId])

    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {
                quotes.map(quote => (
                    <QuoteCard key={quote._id} {...quote} />
                ))
            }

        </div>
    )
}

