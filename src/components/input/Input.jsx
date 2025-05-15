import React from "react";
import style from "./Input.module.css";

function Input(props) {
  return (
    <div className={`mt-3 ${style.input}`}style={props.style ?props.style: {}}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  );
}

export default Input;
