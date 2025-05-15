import React from "react";
import style from "./error.module.css";


function Error(props) {
  return (
    <div className={style.notfoundd}>
      <div className={style.notfound}>
        <div className={style.notfound404}>
          <h1>{props.error}</h1>
        </div>
        <h2>{props.statusText}</h2>
        <p>
          Something Went Wrong !
        </p>
      </div>
    </div>
  );
}

export default Error;
