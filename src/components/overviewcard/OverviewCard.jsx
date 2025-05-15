import React from "react";
import style from "./style.module.css";


function OverviewCard(props) {
  return (
    <>
      <div
        className={`${style.overviewCard} ${
          props.maxHeight100 ? props.maxHeight100 : ""
        }`}
      >
        <div>
          <h2>{props.overVal}</h2>
          <p>{props.overText}</p>
        </div>
        <span className={style.cardIcon}>{props.image}</span>
      </div>
    </>
  );
}

export default OverviewCard;
