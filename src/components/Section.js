import Modal from "./Modal";
import Button from "./Button";
import {useState} from "react";

const Section=({title,content})=>{
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
                content={content}
                onClick={Toggle}
            />
        </div>
    )
}

export default Section