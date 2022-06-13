import * as React from "react"
import "./Chip.css"
import { useState } from 'react';

export function Chip({ label = "", isActive = false }) {
  
  const pickCategory = () => {
    console.log("yay")
  
    setAct(true)
    /*isActive = act*/
  
    
  }
  let buttonClassName;
  if (isActive == false){
    
    buttonClassName = "chip"
  } else {
    
    buttonClassName = "chip active"
  }

  return (

    <button className={buttonClassName}>
      <p className="label"  onClick={pickCategory}>{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
