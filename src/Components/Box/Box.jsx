import React from 'react'
import "./Box.css"
const Box = ({value, Onclick }) => {
  const style = value === "X" ? "box x" : "box o";
  return (
      <button className={style} Onclick={onclick}>{value}</button>
  )
}

export default Box
