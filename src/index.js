import React from "react";
import ReactDOM from "react-dom";
import Card from "./App";
import './index.css'
import Sdata from './Sdata'

ReactDOM.render(
<>
<span className="netflix">
        <img src="https://wallpapercave.com/dwp1x/wp5063339.png" alt="Netflix"/>
        </span>
        <h1 className="header">List of top Netflix Series</h1>
        
<span className="container">
<Card
        imgsrc = {Sdata[0].imgsrc}
        title = {Sdata[0].title}
        sname = {Sdata[0].sname}
        link = {Sdata[0].link}
/>
<Card
        imgsrc = {Sdata[1].imgsrc}
        title = {Sdata[1].title}
        sname = {Sdata[1].sname}
        link = {Sdata[1].link}
/>
<Card
        imgsrc = {Sdata[2].imgsrc}
        title = {Sdata[2].title}
        sname = {Sdata[2].sname}
        link = {Sdata[2].link}
/>

</span>
</>,
document.getElementById('root'));