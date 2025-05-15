import React from 'react'

function buttons(props) {
  return (
    <button className={props.className} onClick={props.onClick}>{props.btnText}</button>
  )
}

export default buttons