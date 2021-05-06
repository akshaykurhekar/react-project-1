
import style from "./card.module.css";

const Card = (props) => {
    

  return (

    <div style={{ width: "250px", alignItems: "center" }}>
      <div className={style.card}>
        <div className="title">
          {" "}
          <h2>{props.title}</h2>
        </div>

        <div className="body">
          <h6>
            {props.cardBody}
          </h6>
        </div>

        <div className="footer">
          <p>{props.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
