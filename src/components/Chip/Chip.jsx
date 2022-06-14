import * as React from "react"
import "./Chip.css"


export function Chip({ label = "", isActive = false, onClick = () => {} }) {
  /*console.log(isActive);*/
  
  let buttonClassName;
  if (isActive == false){
    
    buttonClassName = "chip"
  } else {
    
    buttonClassName = "chip active"
  }

  return (

    <button className={buttonClassName} onClick={onClick}>
      <p className="label"  >{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
