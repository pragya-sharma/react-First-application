import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

let gv = "";
const cssStyle = {};
/*
let curentTime = new Date(2020, 9, 9, 4);*/

let curentTime  = new Date();
curentTime = curentTime.getHours();
if (curentTime >= 1 && curentTime < 12) {
  gv = "Good Morning !!!";
  cssStyle.color = "green";
}
else if (curentTime >= 12 && curentTime < 19) {
  gv = "Good AfterNoon";
  cssStyle.color = "orange";
}
else if (curentTime >= 19 && curentTime < 21) {
  gv = "Good Evenning";
  cssStyle.color = "blue";
}
else {
  gv = "Good Night";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1> Hello , Guyee <span style={cssStyle}>{gv}</span></h1>
    </div>
  </>,
  document.getElementById("root")
);