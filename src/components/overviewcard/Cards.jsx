import React from "react";
import style from "./style.module.css";

function Cards(props) {
  return (
    <>
      <div
        className={`${style.card} ${
          props.backgroundColor ? props.backgroundColor : ""
        }`}
      >
        <div>
          <h2>{props.cardVal}</h2>
          <p>{props.cardText}</p>
        </div>
        <img src={props.image} alt="" className={style.cardIcon} />
      </div>
    </>
  );
}

export default Cards;
