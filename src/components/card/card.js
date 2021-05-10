
import style from "./card.module.css";

const Card = (props) => {    

    //console.log(props.cardColor);
    const CardStyle = {
         
            backgroundColor: `${props.cardColor}`,
            color: 'beige',
            borderRadius: '10px',
            padding: '0.5rem',
            boxShadow: '0 0 10px #0c0000',
            margin:'1rem'         
    }


  return (
    <div>
      <div style={CardStyle}>
        <div>
            <h3>{props.title}</h3>
        </div>

        <div className="body">
          <p>
            {props.cardBody}
          </p>
        </div>

        <div className={style.footer}>
          <p>{props.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
