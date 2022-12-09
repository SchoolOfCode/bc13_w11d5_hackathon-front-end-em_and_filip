import React from "react"
import './Button.css'

export default function Button(props){
    return <button className={props.buttonClass} onClick={props.handleClick}>{props.buttonName}</button>
}