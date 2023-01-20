import React from "react";
import ReactDOM from "react-dom";
import {Card,Header} from "./App";
import './index.css'
import Sdata from './Sdata'

function ncard1(val){
        return (
        <Card
        key = {val.id}
        imgsrc = {val.imgsrc}
        title = {val.title}
        sname = {val.sname}
        link = {val.link}
/>
        )
}

// function ncard2(val){
//         return (
//         <Card
//         imgsrc = {Sdata[3].imgsrc}
//         title = {Sdata[3].title}
//         sname = {Sdata[3].sname}
//         link = {Sdata[3].link}
// />
//         )
// }

ReactDOM.render(
<>
        <Header/>
        
<div className="container">
        {Sdata.map(ncard1)}
</div>

{/* <div className="container1">
        {Sdata.map(ncard2)}
</div> */}

</>,
document.getElementById('root'));