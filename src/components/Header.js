import Button from "./Button";
import Title from "./Title";
import Subtitle from "./Subtitle";
import {useState,useEffect} from "react";


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
        <section className="section has-text-centered content">
                <Title title={title}/>
                <Subtitle subtitle={subtitle}/>
                <Button value={'open'}
                        type={style}
                        disabled={disabled}
                        onClick={()=>{
                            if(!loading){
                                changeColor()
                            }
                        }}/>
        </section>
    )
}

export default Header