import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"

// To print current date and time.
const currentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString ()
const image = "https://picsum.photos/200/300"

ReactDom.render (
    <>
    <div className='body'>
    <h1> Hello world! </h1>
    <p>Current Date is : {currentDate}</p>
    <p>Current Time is : {currentTime}</p>
    <img src='{image}' alt='random Image' />
    </div>
    </>,

document.getElementById('root'))    
