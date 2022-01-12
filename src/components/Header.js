import Button from "./Button";
import {useState,useEffect} from "react";

import {isDisabled} from "@testing-library/user-event/dist/utils";

const Header =({title,subtitle})=>{
    const [style, setStyle]=useState("is-primary")
    const [disabled,setDisabled]=useState(false)
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            if(loading){
                setStyle('is-primary')
                setDisabled(false)
                setLoading(false)
            }
        },1000)
    },[loading])

    const changeColor = ()=>{
        const color = (style)=>{
           return(
               (style==="is-primary") ? 'is-danger'
                   :(style==='is-danger')? 'is-warning'
                       :(style==='is-warning') ? 'is-success'
                           :(`is-loading ${setLoading(true)} ${setDisabled(true)}`)
           )
        }
         setStyle(color)
    }
    return(
        <section className="section">
            <div className="container">
                <p className="title">
                    {title}
                </p>
                <p className="subtitle">
                    {subtitle}
                </p>
                <Button value={'open'}
                        type={style}
                        disabled={disabled}
                        onClick={()=>{
                            if(!loading){
                                changeColor()
                            }
                        }}/>
            </div>
        </section>
    )
}

export default Header