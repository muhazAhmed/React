import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render (
    <React.Fragment>

    <div className='body'>
    <h1> Hello world! </h1>
    <p>Welcome</p>
    </div>
    </React.Fragment>,

document.getElementById('root'))    

// Or, we can just use,   <> ....</>, rather than typing React.Fragment. Both works fine.