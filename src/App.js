import "./App.css";
import React, { useState } from "react";


function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  if (isFlipped) {
    return (
      <div
        key="front"
        onClick={handleClick}
        style={{ backgroundColor: "blue", width: "150px", height: "150px" }}
      >
        <p>{props.name}</p>
      </div>
    );
  } 
  else 
  {
   return ( <div
      key="back"
      onClick={handleClick}
      style={{ backgroundColor: "red", width: "150px", height: "150px" }}
    ></div>)
  }
}


function Allt(props) {
  const [data, setData] = useState([]);
  const [cards, setCard] = useState([]);

  function SlumpaKort() {
    fetch(`https://www.swapi.tech/api/people`)
      .then((response) => response.json())
      .then((data) => setData(data.results));

    for (let index = 0; index < 5; index++) {
       setCard[index] (<Card/>)
    }

    
  }

  return (
    <div>
      {cards[0]}
    </div>
  );
}

function App() {
  return <Allt/>
}

export default App;
