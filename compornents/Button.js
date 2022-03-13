import React from 'react'
import index from "../styles/Index.module.css";

const Button = (props) =>  {
  return (
    <button className={index.button}>
        {props.children}
    </button>
  )
}

export default Button;