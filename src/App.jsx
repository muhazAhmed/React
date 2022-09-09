import React from "react";
import {Sum, Sub, Div, Mult} from './Calc'

function App(){ 
    return( <>
        <ul>
                <li>Sum of two numbers is : {Sum(40,4)} </li>
                <li>Sub of two numbers is : {Sub(40,4)} </li>
                <li>Div of two numbers is : {Div(40,3)} </li>
                <li>Mult of two numbers is : {Mult(40,3)} </li>
        </ul>
        </>
    )
}

export default App