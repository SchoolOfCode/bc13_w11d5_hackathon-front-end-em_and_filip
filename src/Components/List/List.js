import React from "react"
import './List.css'
import ListItem from "../ListItem/ListItem"

export default function List(props){
    return [
        <div className="list-container">
            <ol>
                    {props.giftsArray.map((gift)=>{
                return (
                    <ListItem 
                    giftName={gift.item}
                    buttonName={props.doneButtonText}
                    handleDoneClick={props.handleDoneClick}
                />
                )
                
                })}
            </ol>
        </div>
    ]
    
    
}