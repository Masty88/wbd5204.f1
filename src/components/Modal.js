import {useState} from "react";
import Button from "./Button";

const Modal=({title,show,onClick,content})=>{
    return(
        show?
        <div className="box">
            <div className="modal-background"></div>
            <div className="modal-content has-text-white">
                {content}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onClick}>
            </button>
            <Button
                value={'ok'}
                type="is-primary mt-4"
                onClick={onClick}
            />
        </div>:null
    )
}

export default Modal