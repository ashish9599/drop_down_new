import { useState } from "react";
import DropDown from "./DropDown";
const  App=()=>{
  const countries=[{
    name:"India", 
    value:"In",
    cities:['Delhi','Mumbai']
  },{
    name:"Pakistan", 
    value:"pak",
    cities:['lahore','karachi']
  },{
    name:"Bangladesh", 
    value:"Bag",
    cities:['Dhaka','chattar']
  }]
const [drop, setDrop]=useState(false);
const handleDrop=()=>{
  setDrop(!drop);
  console.log(drop);
}

  return (
    <div className="App">
      <div>
        <DropDown/>
      </div>
     
    </div>
  );
}

export default App;
