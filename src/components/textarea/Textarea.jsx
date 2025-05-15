import React from "react";
import style from "./style.module.css"

function Textarea(props) {
  return (
    <div className={`mt-3 ${style.textArea}`}>
      <label htmlFor={props.textarea.id}>{props.label}</label>
      <textarea {...props.textarea} />
    </div>
  );
}

export default Textarea;
