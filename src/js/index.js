import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import Proptypes from 'prop-types';


import "../styles/index.css";

function SimpleCounter(props){
    return (<div className="Counter">
      <div className="clock">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2XviRLgx9arjgar9or9Ph0Aytoi58KrSEg&usqp=CAU" alt="ClocK" width="45" height="45"></img>
      </div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div> 
    </div>);
  } 



  SimpleCounter.Proptypes = {
    digitFour: Proptypes.number,
    digitThree: Proptypes.number,
    digitTwo: Proptypes.number,
    digitOne: Proptypes.number
  };



  let counter = 0;
  setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;

    
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
        document.querySelector("#app")
        );
      },1000);
 
