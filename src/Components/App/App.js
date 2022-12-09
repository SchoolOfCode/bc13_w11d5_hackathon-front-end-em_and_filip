import React, { useState } from "react"
import Input from '../Input/Input';
import Button from '../Button/Button';
import List from '../List/List';
import './App.css';

function App() {

  const [inputValue, setinputValue] = useState("")
  const [giftsArray, setGiftsArray] = useState([])
  const [doneButtonText, setdoneButtonText] = useState("DONE")

  function handleChange(e){
    setinputValue(e.target.value)
    console.log(inputValue)
  }

  function handleAddClick(){
    setGiftsArray([...giftsArray,inputValue])
    
  }

  function handleDoneClick(){
    setdoneButtonText("✅")
  }
  console.log(giftsArray)



  return (
    <div className="App">
      
      <div className="addGift-container">
        <Input handleChange={handleChange}/>
        <Button buttonName="Add A Gift" handleClick={handleAddClick}/>
      </div>  

      <List giftsArray={giftsArray} handleDoneClick={handleDoneClick} doneButtonText={doneButtonText}/>  
    </div>
  );
}

export default App;
