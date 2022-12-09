import React from "react"

export default function Input(props){
    return [
        
            <input className="input" onChange={props.handleChange} placeholder="Type a gift"></input>
        
    ]
    
    
}