import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { postBlog } from "../../../action/actionBlog";
const AddPost = ({message,setMessage}) => {
    const [text,setText] = useState('')
    const SendMessage = () =>{
        postBlog(text,message,setMessage)
        setText("")
    }
    return (
        <>
        <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={(event)=>setText(event.target.value)} value={text} placeholder="Enter message" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={SendMessage} >Send</button>
                    </div>
                </div> 
        </div>
        </>
    );
};
export default AddPost;
