
import style from "./card.module.css";

const Card = (props) => {    

  return (
    <div>
      <div className={style.card}>
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
