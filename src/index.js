import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"
import Heading from './Heading'
import List from './List'
import Para from './Para'


ReactDom.render (
    <>
    <div className='body'>
    <Heading/>
    <Para/>
    <List/>
    </div>
    </>,

document.getElementById('root'))    
