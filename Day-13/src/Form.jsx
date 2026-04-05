import { useState } from 'react'

export default function Form(){
    let [fullName, setFullName] = useState("");

    function handleName(event) {
        setFullName(event.target.value);
    }

    return(
        <div>
            <input placeholder="Enter full name" type="text" value={fullName} onChange={handleName} />
            <button>Submit</button>
        </div>
    )
}