import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"
import { getBlog } from '../../action/actionBlog';
import Post from './Post/Post';
import AddPost from './AddPost/AddPost';
const Profile = ({message,setMessage,isAuth}) =>{
       useEffect(()=>{
         getBlog(setMessage)
       },[]);
    return(
        <div>
            <AddPost message={message} setMessage={setMessage}/>
            <Post message={message} isAuth={isAuth} setMessage={setMessage}/>
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    
  });
export default connect(mapStateToProps)(Profile);
