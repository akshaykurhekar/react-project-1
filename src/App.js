import { useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import Inputs from "./components/inputs/input";

const cardListData = [
  {
    title: "First card",
    cardBody: "Card body",
    color: "#710a5e",
  },
  {
    title: "Second card",
    cardBody: "Card body Second Card",
    color: "#0f518f",
  },
];

function App() {
  const [titleValue, setTitle] = useState(" "); // init
  const [cardBody, setCardBody] = useState(" "); // init
  const [color, setColor] = useState("#710a5e"); // init
  const footer = "react.js by Akshay Kurhekar ";
  const [cardList, setCardList] = useState(cardListData);
console.log(color);
  const submitHandler = () => {

    const cardData = {
      title: titleValue,
      cardBody: cardBody,
      color: color,
      footer: footer,
    };

    setCardList(prevCard => {
        return [...prevCard, cardData];
    })
  };
 

  const inputHandler = (e) => {
    //console.log('input function called:',e);
    setTitle(e.target.value);
  };

  const inputHandlerBody = (e) => {
    //console.log('input function called:',e);
    setCardBody(e.target.value);
  };

  const colorHandler = (e) => {
    setColor(e.target.value);
   };
  return (
    <div className="app">
      <h2>Card generator</h2>
      <Inputs
        inputHandler={inputHandler}
        cardBody={inputHandlerBody}
        cardColor={color}
        color={colorHandler}
        submitHandler={submitHandler}
      />
      <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto auto'}}>
        
      {cardList.map((e, idx) => {
        return (
          <Card
            key={idx}
            title={e.title}
            cardBody={e.cardBody}
            footer={footer}
            cardColor={e.color}
          />
        );
      })}
      </div>
    </div>
  );
}

export default App;
