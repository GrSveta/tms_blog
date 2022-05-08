import React from "react";
import './Textarea.css'

type TextareaProps = {
    placeholder: string,
    label: string,
    cols: number,
    rows: number,
}

export const Textarea = (props: TextareaProps) => {
    return (
        <div className="textearea__structure">
            <label >
                {props.label}  
            </label>
            <textarea  name='textarea'  placeholder={props.placeholder} cols={70} rows={15}></textarea> 
        </div>
    )
}


//размер textarea??