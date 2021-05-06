import './input.css';

const input = (props) => {
  return (
    <div className="inputs">
      <input placeholder='Card Title' onChange={props.inputHandler} />
      <input placeholder='Card body' onChange={props.cardBody} />
    </div>
  );
};

export default input;
