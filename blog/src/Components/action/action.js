import axios from "axios"
import { url } from "../../URL/url"
export const login = (registered,SetisAuth,setData,history) =>{
      axios.post(`${url}adminAuth`,registered)
      .then(response=>{   
            if(response.data.message){
              alert(response.data.message)
            }else{
              setData(response.data)
              SetisAuth(true)
              history.push('/')
        }
    })
}
export const register = (registered) =>{
    axios.post(`${url}adminRegister`,registered)
          .then(response=>{
              console.log(response)
              if(response.data.message){
                alert(response.data.message)
              }else{
                alert("Обліковий запис успішно створено")
              }
              
          })
}
export const getData = (id,setAllData) =>{
    axios.get(`${url}getAdmin/`+id)
            .then(res => {
                setAllData(res.data)
                console.log(res.data.user.fullName)
            })
}
