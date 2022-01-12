import Modal from "./Modal";
import Button from "./Button";
import {useState} from "react";

const Section=({title})=>{
    const[modal, setModal]=useState(false)
    const Toggle= ()=> setModal(!modal)
    return(
        <div className="section has-text-centered content">
            <Button value={'Open Modal'}
                    type='is-warning'
                    onClick={Toggle}/>
            <Modal
                title={title}
                show={modal}
                onClick={Toggle}
            />
        </div>
    )
}

export default Section