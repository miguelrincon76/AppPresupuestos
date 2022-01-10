import React from 'react'

import { QuoteList } from './QuoteList'

export const Quotes = () => {

    return (
        <div className='container' align='center' marginLeft='250px'>
            <h1>COTIZACIONES</h1>
            <hr />
            <QuoteList proponenteId={'Grupo 06 Web 01'} />
        </div>
    )
}
