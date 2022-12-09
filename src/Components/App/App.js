import React, { useEffect, useState, useContext } from "react"
import Input from '../Input/Input';
import Button from '../Button/Button';
import {DarkModeContext} from "../DarkModeContext/DarkModeContext";
import List from '../List/List';
import './App.css';

const url = "https://christmas-with-em-and-filip.onrender.com"

function App() {
 
  const [inputValue, setinputValue] = useState("")
  const [giftsArray, setGiftsArray] = useState([])
  // const [doneButtonText, setdoneButtonText] = useState("DONE")
  // const [id, setId] = useState()

  const {darkMode} = useContext(DarkModeContext);
  const {toggle} = useContext(DarkModeContext);

  useEffect(()=>{
    async function getChristmasList(){
      const response = await fetch(`${url}/api/christmasList`);
      const data = await response.json(response);
      setGiftsArray(data.payload)
      console.log('payload:', data.payload)
      // setId(data.payload.id)
      // console.log('myID:', data.payload[0].id)
    }
    getChristmasList()
    
},[])

async function postChristmasList(newItem){
  const newObj = {item: newItem, completed: false}
  const response = await fetch(`${url}/api/christmasList`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObj)
  });
  const data = await response.json();
  const newObjItem = (data.payload)
  setGiftsArray(...giftsArray, newObjItem)
  // console.log('payload:', data.payload)
  // setId(data.payload.id)
  // console.log('myID:', data.payload[0].id)
  console.log("giftsArr:", giftsArray)
}



async function handleDoneClick(id) {
    
  setGiftsArray((previous) => {
    return previous.map((item) => {
      if(item.id === id){
        const response = fetch(`${url}/api/christmasList/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ item: item.item, completed: !item.completed }),
        })
      }
      
      return item.id !== id
        ? item
        : { ...item, completed: !item.completed };
    }); 

  })
;
}

 

  function handleChange(e){
    setinputValue(e.target.value)
    console.log(inputValue)
  }

  function handleAddClick(){
    postChristmasList(inputValue)
    
  }

  
  console.log(giftsArray)

  return (
    <div className={darkMode ? "DarkMode" : "App"} >
      
      <div className="addGift-container">
        <Input handleChange={handleChange}/>
        <Button buttonName="Add A Gift" handleClick={handleAddClick}/>
        <Button buttonName="Dark Mode" handleClick={toggle}/>
      </div>  

      <List giftsArray={giftsArray} handleDoneClick={handleDoneClick} />  
    </div>
  );
}

export default App;
