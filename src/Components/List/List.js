import React from "react"
import './List.css'
import ListItem from "../ListItem/ListItem"
import { useState } from 'react'

export default function List(props){
    
    
    return [
        <div className="list-container">
            <ol>
                    {props.giftsArray.map((gift)=>{
                return (
                    
                    <ListItem 
                    giftName={gift.item}
                    buttonId={gift.id}
                    handleDoneClick={props.handleDoneClick}
                    buttonName={props.doneButtonText}
                    handleDoneClick={props.handleTickItem}
                />
                )
                
                })}
            </ol>
        </div>
    ]
    
    
}