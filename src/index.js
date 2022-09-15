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
        
<div className="container">
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

</div>
<div className="container1">
<Card
        imgsrc = {Sdata[3].imgsrc}
        title = {Sdata[3].title}
        sname = {Sdata[3].sname}
        link = {Sdata[3].link}
/>
<Card
        imgsrc = {Sdata[4].imgsrc}
        title = {Sdata[4].title}
        sname = {Sdata[4].sname}
        link = {Sdata[4].link}
/>
<Card
        imgsrc = {Sdata[5].imgsrc}
        title = {Sdata[5].title}
        sname = {Sdata[5].sname}
        link = {Sdata[5].link}
/>

</div>
</>,
document.getElementById('root'));