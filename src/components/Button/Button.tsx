//import React from 'react'
import'./Button.css'

type BtnProps = {
    text?: string
    disabled?: boolean
    onClick: () => void
    icon?: string | undefined 
    className?: string
  }
 
  export const Button = ({text, onClick, icon, className, disabled}: BtnProps) => {

    return( 
      <button type='button' onClick= {onClick} className = {className} disabled = {disabled}
      >
        {icon && <img  className='imgOfBtn' src={icon}/>}
        {text}
        
      </button>
    )
 }
    
     
  
