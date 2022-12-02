import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function Allt(props) {
  const userName = props.username;
  const [points, setPoints] = useState(0);


  function Cards(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
      setIsFlipped(!isFlipped);
    }

    if (isFlipped) {
      return (
        <div key="front" onClick={handleClick} style={{ backgroundColor: "blue", width: "150px", height: "150px" }}>
          <img src={props.img} alt={props.name} />
        </div>
      );
    } else {
      <div key="back" onClick={handleClick} style={{ backgroundColor: "red", width: "150px", height: "150px" }}>
      </div>;
    }
  }

  function SlumpaKort(){
    
  }

}

function App() {
  return (
    <div className="App">
      <Allt />
    </div>
  );
}

export default App;
