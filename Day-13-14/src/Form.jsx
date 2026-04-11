import { useState } from 'react'

export default function Form(){
    // let [fullName, setFullName] = useState("");

    // function handleName(event) {
    //     setFullName(event.target.value);
    // }

    let[formData, setFormData] = useState({
        fullName : "",
        userName : ""
    })

    function handleData(event) {
        setFormData(() => {
            return{
                ...formData, [event.target.name] : event.target.value 
            }
        })
        
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
        fullName : "",
        userName : ""
    })
  };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='fullName'>Full Name</label>
            <input placeholder="Enter full name" type="text" value={formData.fullName} onChange={handleData} id='fullName' name="fullName" />
            <br></br>
            <label htmlFor='userName'>User Name</label>
            <input placeholder="Enter User name" type="text" value={formData.userName} onChange={handleData} id='userName' name="userName" />
            <br></br>
            <button>Submit</button>
        </form>
    )
}