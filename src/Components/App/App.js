import React, { useEffect, useState } from "react"
import Input from '../Input/Input';
import Button from '../Button/Button';
import List from '../List/List';
import './App.css';

const url = "https://christmas-with-em-and-filip.onrender.com"

function App() {
 
  const [inputValue, setinputValue] = useState("")
  const [giftsArray, setGiftsArray] = useState([])
  const [doneButtonText, setdoneButtonText] = useState("DONE")

  useEffect(()=>{
    async function getChristmasList(){
      const response = await fetch(`${url}/api/christmasList`);
      const data = await response.json(response);
      setGiftsArray(data.payload)
    }
    getChristmasList()
    
},[])

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
