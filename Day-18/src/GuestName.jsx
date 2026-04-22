import { useState } from 'react';
import ChangeGuestName from './ChangeGuestName'

export default function Post(){
    let[guestName, setGuestName] = useState("");
    let[displayName, setDisplayName] = useState("");

    let updateGuestName = (newName) => {
        setGuestName(newName);
    }

    let printName = () => {
        setDisplayName(guestName);
    }

    return(
        <div>
            <h2>The Guest Name</h2>
            <h1>{displayName}</h1>
            <ChangeGuestName updateGuestName={updateGuestName} printName={printName} />
        </div>
    )
}