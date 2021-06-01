import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Edit.css';
import { upDateBlog } from "../../../action/actionBlog";
const Edit = ({active,setAcrive,id, message, setMessage,editMessage,setEditMessage}) => {
    const ChangeData = (event) =>{
        setEditMessage(event.target.value)
    }
    const SaveChange = () =>{
            const updatedPost = message.map(eachPost => {
              if (eachPost._id === id) {
                upDateBlog(eachPost._id,editMessage)
                return {  
                  ...eachPost,
                  message: editMessage
                }  
              } 
              return eachPost;
            });
            setMessage(updatedPost);
            setAcrive(false)
    }
    return (
        <>
       <div className={active?'modal active':"modal"} onClick={()=>setAcrive(false)}>
            <div className={active?'modal_content active':"modal_content"} onClick={e=>e.stopPropagation()}>
                <textarea onChange={ChangeData} value={editMessage}/>
                <button onClick={SaveChange}>Save</button>
            </div>
        </div>
        </>
    );
};
export default Edit;
