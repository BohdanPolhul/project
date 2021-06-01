import axios from "axios"
import { url } from "../../URL/url"



export const getBlog = (setMessage) =>{
    axios.get(`${url}getBlog`)
    .then(res => {
        setMessage(res.data.blog)
    })
}
export const postBlog = (text,message,setMessage) =>{
    const id = Date.now();
    const postBlog = {
        message:text,
        _id:id
    }
    axios.post(`${url}postBlog`,postBlog)
    .then(response=>{ 
          if(response.data.message==='Введіть повідомлення'){
             alert(response.data.message)
          }else{
            setMessage([...message,{message:text,_id:id}])   
          }
    })
}
export const upDateBlog = (id,editMessage) =>{
    fetch("http://localhost:4001/app/UpDateBlog/"+id,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                      message: editMessage
                    })
                })
}