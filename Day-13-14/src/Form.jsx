import { useState } from 'react'

export default function Form(){
    let [fullName, setFullName] = useState("");

    function handleName(event) {
        setFullName(event.target.value);
    }

    return(
        <div>
            <label htmlFor='userName'>Full Name</label>
            <input placeholder="Enter full name" type="text" value={fullName} onChange={handleName} id='userName' />
            <button>Submit</button>
        </div>
    )
}