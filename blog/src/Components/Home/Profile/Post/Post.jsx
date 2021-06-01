import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Edit from "../Edit/Edit";
const Post = ({message,isAuth,setMessage}) => {
  const [modalActive,setModalActive] = useState(false)
  const [editId,setEditId] = useState()
  const [editMessage,setEditMessage] = useState()
  const EditPost = (id,mess) =>{
    setEditMessage(mess)
    setEditId(id)
    setModalActive(true)
  }
  const DeletePost = (id) =>{
    const modifiedPost = message.filter(eachPost => {
      fetch("http://localhost:4001/app/deleteBlog/"+id,{
        method:'DELETE',
        header:{'Accept':'application/json',
        'Content-Type':'application/json'}
      })
      return eachPost._id !== id;
    });
    setMessage(modifiedPost);
  }
  return (
    <>
    <div >
      {message.map(eachPost=><div className="row">
        <div className="col-4 ml-auto mr-3 bg-light p-2 border">
          <img src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="" width="50%"/>
          <h6>id:{eachPost._id}</h6>
        </div>
        <div className="col-8 mr-auto ml-3 bg-info p-2 border">
          <p className="post-content"> {eachPost.message}</p>
          
        </div>
        <div>
          {isAuth && <button type="submit"  className="btn col-4 ml-auto mr-3 btn-primary "  onClick={()=>EditPost(eachPost._id,eachPost.message)}>Edit</button>}
          {isAuth && <button type="submit" class="btn  col-8 mr-auto ml-3 bg-danger" onClick={()=>DeletePost(eachPost._id)} >Delete</button>}
        </div>
        
      </div>
      )}
      {isAuth && <Edit active={modalActive} setAcrive={setModalActive} id={editId} message={message} setMessage={setMessage} editMessage={editMessage} setEditMessage={setEditMessage}/>}
    </div>
      
    </>
  );
};
export default Post;
