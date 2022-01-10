import React from 'react'

import { QuoteList } from './QuoteList'

export const Quotes = () => {

    return (
        <div
            className='container-fluid me-4'
            align='center'

        >
            <h1>COTIZACIONES</h1>
            <hr />
            <QuoteList proponenteId={'Grupo 06 Web 01'} />
        </div >
    )
}
