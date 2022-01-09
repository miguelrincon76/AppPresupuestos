import React from 'react'

import { QuoteList } from './QuoteList'

const Screen = props => {
    return (
        <div className='text-center'>
            <h1>Screen</h1>
            <hr />
            <QuoteList proponenteId={'Grupo 06 Web 01'} />

        </div>
    )
}

export default Screen
