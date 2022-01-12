import {useState} from "react";
import button from "./Button";


const Button=({value,type,onClick,disabled})=>{

    return(
        <button
            className={`button ${type}`}
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </button>
    )
}

export default Button