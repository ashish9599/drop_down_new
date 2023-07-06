import { useState } from "react";
import styles from './dropdown.module.css'
const  DropDown=()=>{
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
    const [showcity,setShowCity]=useState(false);
    const [selected,setSelected]=useState("");
    const [selectedCity,setSelectedCity]=useState("");
    const [selectedIndex,setSelectedIndex]=useState(0);
    
const handledropDown=(name,i)=>{
    setSelected(name);
   setSelectedIndex(i);
    setDrop(false);
}
const handleShow=(city)=>{
setSelectedCity(city)
setShowCity(false);
}
  return (
    <div className={styles.dropdown}>

        <h1>Select A country</h1>
        <button onClick={()=>setDrop(!drop) }>{selected?selected:"Country"}</button>
 
{ drop&&countries.map((country,i)=>
    (
        <button onClick={()=>handledropDown(country.name,i)}
        key={i}
        >{country.name}</button>
   )
   )}
     <h1>Select City</h1>
   <button onClick={()=>setShowCity(!showcity)}>{selectedCity?selectedCity:"City"}</button>
   { showcity&&countries[selectedIndex].cities.map((city,i)=>
    (
        <button onClick={()=>handleShow(city)} key={i}>{city}</button>
   )
   )}
   
    </div>
  );
}

export default DropDown;

