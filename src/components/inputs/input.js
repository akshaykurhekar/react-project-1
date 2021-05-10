import './input.css';

const input = (props) => {
  return (
    <div className="inputs">
      <input type="text" placeholder='Card Title' onChange={props.inputHandler} />
      <input type="text" placeholder='Card body' onChange={props.cardBody} />
      <input type="color" value={props.cardColor} onChange={props.color} />
       
       <button onClick={props.submitHandler}>save</button> 
    </div>
  );
};

export default input;
