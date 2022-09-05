import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"

// To print current date and time.
let currentDate = new Date()
currentDate = currentDate.getHours()
let greeting = '';
const style = {}

if(currentDate >=0  && currentDate <= 11){
    greeting = "Good Morning!";
    style.color = "green"
}else if(currentDate <= 16 && currentDate >= 12){
    greeting ="Good Afternoon!";
    style.color = "orchid"
}else if(currentDate >= 16 && currentDate < 19){
    greeting = "Good Evening!";
    style.color = "blue"
}else if(currentDate >= 19 && currentDate <= 24){
    greeting = "Good Night";
    style.color = "red"
}

ReactDom.render (
    <>
    <div>
    <h1>Hello, <span style={style}> {greeting} </span> </h1>
    </div>
    </>,

document.getElementById('root'))    
