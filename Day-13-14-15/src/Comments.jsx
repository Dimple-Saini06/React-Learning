import { useState } from 'react'
import './Comments.css'
export default function Comments() {
    let[comment, setComment] = useState([{
        username : '@ds',
        remark : 'good work!',
        rating : 5
    }])

    return(
        <div>
            <h3>All Comments!</h3>
            <div className="comment">
                <span>{comment[0].remark}</span>
                &nbsp;
                <span>(rating : {comment[0].rating})</span>
                <br></br><br></br>
                <span>-{comment[0].username}</span>
            </div>
        </div>
    )
}