import { useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import Inputs from "./components/inputs/input";

function App() {
  const [titleValue, setTitle] = useState('React with akshay'); // init
  const [cardBody , setCardBody] = useState('Card body in react workshop, card body in react workshop.'); // init
  const footer = "copy right issued by akshay kurhekar @ 2021";

const inputHandler = (e) =>{    
    //console.log('input function called:',e);
    setTitle(e.target.value)
}

const inputHandlerBody = (e) =>{    
    //console.log('input function called:',e);
    setCardBody(e.target.value)
}
  return (
    <div className="app">
        <h2>Card generator</h2>
      <Inputs inputHandler={inputHandler} cardBody={inputHandlerBody} />
      <Card title={titleValue} cardBody={cardBody} footer={footer}  />
    </div>
  );
}

export default App;
