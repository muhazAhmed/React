import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"
import Heading from './Heading'

ReactDom.render (
    <>
    <div className='body'>
    <Heading/>
    <p>This is a paragraph</p>
    <ol>
        <li>Tag 1</li>
        <li>Tage 2</li>
        <li>Tag 3</li>
    </ol>
    </div>
    </>,

document.getElementById('root'))    
