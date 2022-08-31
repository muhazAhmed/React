import React from 'react'
import ReactDom from 'react-dom'

// To print current date and time.
const currentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString ()

ReactDom.render (
    <>
    <div>
    <h1> Hello world! </h1>
    <p>Current Date is : {currentDate}</p>
    <p>Current Time is : {currentTime}</p>
    </div>
    </>,

document.getElementById('root'))    
