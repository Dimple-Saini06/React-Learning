import { useState } from 'react'
import CommentsForm from './CommentsForm'
import './Comments.css'

export default function Comments() {
    let[comments, setComment] = useState([{
        username : '@ds',
        remarks : 'good work!',
        rating : 5
    }])

    function addNewComment(comment){
        setComment((currComment)=>[...currComment, comment]);
    }

    return(
        <div className='outer'>
            <h3>All Comments!</h3>
                {
                    comments.map((comment, idx) => (
                        <div className="comment" key={idx}>
                            <span>{comment.remarks}</span>
                            &nbsp;
                            <span>(rating : {comment.rating})</span>
                            <br></br><br></br>
                            <span>-{comment.username}</span>
                        </div>
                    ))
                
                    
                }
            
            <hr></hr>
            <CommentsForm addNewComment={addNewComment} />
        </div>
      
    )
}