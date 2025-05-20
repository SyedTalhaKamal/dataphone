import React from "react";
import style from "./style.module.css";

interface CardsProps {
  cardVal: string;
  cardText: string;
  image: string;
  backgroundColor?: string;
}

const Cards: React.FC<CardsProps> = ({ cardVal, cardText, image, backgroundColor }) => {
  return (
    <>
      <div
        className={`${style.card} ${
          backgroundColor ? backgroundColor : ""
        }`}
      >
        <div>
          <h2>{cardVal}</h2>
          <p>{cardText}</p>
        </div>
        <img src={image} alt="" className={style.cardIcon} />
      </div>
    </>
  );
};

export default Cards;