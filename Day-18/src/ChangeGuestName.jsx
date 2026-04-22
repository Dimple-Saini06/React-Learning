import { useState } from 'react';

export default function CreatePost({ updateGuestName, printName }) {
    let[name, setName] = useState("");

    let updateName = (event) => {
        setName(event.target.value);
        updateGuestName(event.target.value);
    }

    let printWithRemove = (event) => {
        printName();
        event.preventDefault();
        setName("");
    }

    return(
        <>
            <input placeholder="Write Guest Name" value={name} onChange={updateName} />
            <button onClick={printWithRemove}>Update Name</button>
        </>
    )
}