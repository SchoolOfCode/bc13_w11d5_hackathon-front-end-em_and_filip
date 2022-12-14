import React from "react"
import Button from "../Button/Button"
import './ListItem.css'

export default function ListItem(props){
    return (
        
            
            <div className="list-item-container">
                <li>{props.giftName}</li>
                <div className="list-buttons">
                    <Button id={props.buttonId} buttonName={props.completed ? "✅" : "DONE"} handleClick={props.handleDoneClick}/>   
                    <Button buttonName="DELETE" />  
                </div>
                 

            </div>
            
     
    )
    
    
}