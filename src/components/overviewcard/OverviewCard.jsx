import React from "react";
import style from "./style.module.css";

function OverviewCard(props) {
  return (
    <>
      <div
        className={`${style.overviewCard} ${
          props.backgroundColor ? props.backgroundColor : ""
        }`}
      >
        <div>
          <h2>{props.overVal}</h2>
          <p>{props.overText}</p>
        </div>
        <img src={props.image} alt="" className={style.cardIcon} />
      </div>
    </>
  );
}

export default OverviewCard;
