const input = (props) => {
  return (
    <div style={
        {
            padding:'2rem'
        }
    }>
      <input placeholder='Card Title' onChange={props.inputHandler} />
      <input placeholder='Card body' onChange={props.cardBody} />
    </div>
  );
};

export default input;
