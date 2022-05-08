import React, { useState } from "react";
import './input.css'

type InputProprs={
    type: 'E-mail' | 'Password' | 'Text'
    placeholder: string,
    className:string,
    disabled?:boolean,
    text?:string
    handleSubmit?: () => void
}


export const Input =(props:InputProprs)=>{
    const [inputValue, setInputValue] = useState('')
    const[error, setError] = useState('')


    const handleChange = (event: any) => {
         setInputValue(event.target.value)
         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
         if (props.type === 'Password') {
             if (event.target.value.length < 6 && event.target.value.length > 0) 
             {
                 setError("Password must contain at least 6 digits")  
                 event.target.classList.add('error');
             } else {
                 setError("")
                 event.target.classList.remove('error');
             }
             
         }
         if (props.type === 'E-mail') {
            if (!re.test(String(event.target.value).toLocaleLowerCase()) && event.target.value.length > 0)
            {
                setError("Invalid e-mail entered")
                event.target.classList.add('error');
            } else {
                setError("")
                event.target.classList.remove('error');
            }

        }
    }


    return(
<div className="generalInput">
    <label className="generalInput__label">{props.type}</label>
    <input className='generalInput__inputForm' 
           type={props.type} 
           onChange={handleChange} 
           disabled={props.disabled} 
           value={inputValue} 
           >
    </input>
    { error && <label className='textOfError textOfError-fontSize textOfError-color' >{error}</label>}
</div>
    )}


















