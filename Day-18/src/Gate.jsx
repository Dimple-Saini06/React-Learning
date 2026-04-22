import { useState } from "react";
import GateKey from './GateKey'

export default function Gate() {
    let[isOpen, setIsOpen] = useState(false);

    let unLock = (newValue) => {
        setIsOpen(newValue);
        console.log("GATE LOCK CHANGE");
    }

    return(
        <div>
            {
                isOpen ? "The Gate is Open!" : "Locked"
                
            }
            
            <br></br>
            <br></br>
            <GateKey unLock={unLock} currentState={isOpen} />
        </div>
    )
}