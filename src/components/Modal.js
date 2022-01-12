import {useState} from "react";
import Button from "./Button";

const Modal=({title,show,onClick})=>{
    return(
        show?
        <div className="box">
            <div className="modal-background"></div>
            <div className="modal-content">
             This is my modal
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onClick}>
            </button>
        </div>:null
    )
}

export default Modal