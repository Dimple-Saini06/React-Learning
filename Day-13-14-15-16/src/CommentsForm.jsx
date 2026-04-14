import { useState } from 'react'
export default function CommentsForm() {
    let[formData, setFormData] = useState({
        username : "",
        remarks : "",
        rating : ""
    })

    function handleData(event) {
        setFormData(() => {
            return{
                ...formData, [event.target.name] : event.target.value
            } 
        })
    }

    function defaultRemove(event){
        event.preventDefault();
        console.log("form is Submitted : ", formData)
        setFormData({
            username : "",
            remarks : "",
            rating : ""
        })
    }
    return(
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={defaultRemove}>
                <label htmlFor='username'>UserName</label>
                &nbsp;
                <input placeholder='username' 
                    value={formData.username} 
                    onChange={handleData} 
                    name="username" 
                    id='username' >
                </input>

                <br></br><br></br>

                <label htmlFor='rating'>Rating</label>
                &nbsp;
                <input placeholder='rating' 
                    type='number' min={1} max={5} 
                    value={formData.rating} 
                    onChange={handleData} 
                    name="rating" 
                    id='rating' >
                </input>

                <br></br><br></br>

                <label htmlFor='remark'>Remarks</label>
                &nbsp;
                <textarea placeholder="add few remarks" value={formData.remarks} 
                    onChange={handleData} 
                    name="remarks" 
                    id='remark' >
                </textarea>

                <br></br><br></br>

                <button>Add Comment</button>
            </form>
        </div>
    )
}