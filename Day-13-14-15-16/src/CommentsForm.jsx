import { useState } from 'react'
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   } 
    return errors;
};

export default function CommentsForm({addNewComment}) {
    // let[formData, setFormData] = useState({
    //     username : "",
    //     remarks : "",
    //     rating : ""
    // })

    // function handleData(event) {
    //     setFormData(() => {
    //         return{
    //             ...formData, [event.target.name] : event.target.value
    //         } 
    //     })
    // }

    // function defaultRemove(event){
    //     event.preventDefault();
    //     console.log("form is Submitted : ", formData)
    //     addNewComment(formData);
    //     setFormData({
    //         username : "",
    //         remarks : "",
    //         rating : ""
    //     })
    // }

    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    return(
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='username'>UserName</label>
                &nbsp;
                <input placeholder='username' 
                    value={formik.values.username} 
                    onChange={formik.handleChange}
                    name="username" 
                    id='username' >
                </input>
                {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
                <br></br><br></br>

                <label htmlFor='rating'>Rating</label>
                &nbsp;
                <input placeholder='rating' 
                    type='number' min={1} max={5} 
                    value={formik.values.rating} 
                    onChange={formik.handleChange} 
                    name="rating" 
                    id='rating' >
                </input>

                <br></br><br></br>

                <label htmlFor='remark'>Remarks</label>
                &nbsp;
                <textarea placeholder="add few remarks" value={formik.values.remarks} 
                    onChange={formik.handleChange} 
                    name="remarks" 
                    id='remark' >
                </textarea>

                <br></br><br></br>

                <button>Add Comment</button>
            </form>
        </div>
    )
}