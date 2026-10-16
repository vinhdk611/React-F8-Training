import { useState } from "react";
import RandomComponent from "./RandomComponent";

export default function UseEffectTrain(){
    const [show, setShow] = useState(false)
    const handleToggle = () =>{
        setShow(!show)
    }
    return (
        <div>
            <h1>Hello ae F8</h1>
            {show && (<RandomComponent/>)}
            <button onClick={handleToggle}>Toggle</button>
        </div>
    )
}
