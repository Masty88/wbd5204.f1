import {useState} from "react";
import button from "./Button";


const Button=({value,type,onClick,disabled,arialabel})=>{

    return(
        <button
            className={`button ${type}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={arialabel}
        >
            {value}
        </button>
    )
}

export default Button