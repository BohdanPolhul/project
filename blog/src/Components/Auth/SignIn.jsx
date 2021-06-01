import React,{Component, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import { login } from '../action/action'
const SignIn =(props) => {
  let history = useHistory()
  const [name,Setname] = useState('')
  const [password,SetPassword] = useState('')
  const changename = (event) =>{
    
    Setname(event.target.value)
    
  }
  const changePassword = (event) =>{
    
    SetPassword(event.target.value)
    
  }
  const Submit = (event) =>{
    <Redirect to="/" />
    // history.push('/')
    const registered = {
      name:name,
      password:password
    }
    login(registered, props.SetisAuth, props.setData,history)
    SetPassword('')
    Setname('')
  }

    return (
      <div className="">
        <div className="container col-4 ">
          <div className="form-div">
            <form>
              <div class="form-floating">
                <input type="text" placeholder="name" onChange={changename} value={name} className="form-control form-group" required/>
                <label for="name">name</label>
              </div>
              <div class="form-floating">
              <input type="password" placeholder="Password" onChange={changePassword} value={password} className="form-control form-group" required/>
                <label for="password">password</label>
              </div>
             <button onClick={Submit} type='submit' className='btn btn-danger btn-block col-12' >Вхід</button>
            </form>
          </div>
        </div>
      </div>
    )
  
}
export default SignIn;


/* 
import React,{Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { NavLink } from 'react-router-dom'
class SignIn extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      password:'',
      to:'/profile'
    }
    this.link={
        to:''
    }
    this.changename = this.changename.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.Submit = this.Submit.bind(this)
  }
 
  changename(event){
    this.setState({
      name:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  Submit(event){
    event.preventDefault()
    const registered = {
      name:this.state.name,
      password:this.state.password
    }
    console.log(registered)
    axios.get('http://localhost:4000/app/users/'+this.state.name,registered)
          .then(response=>{ 
              console.log(response)
              if(response.data===''){
                alert("Неправилний логін або емейл")
              }else{
                  alert("Hi")
                  this.setState({
                    to:'/profile'
                  })
                  console.log(this.state.to)
              }
            
          })
    this.state={
      name:'',
      password:''
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input type="text" placeholder="name" onChange={this.changename} value={this.state.name} className="form-control form-group"/>
              <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} className="form-control form-group"/>
              <NavLink to={this.state.to} onClick={this.Submit}><input type='submit' className='btn btn-danger btn-block' value="Ввійти"/></NavLink>
              <NavLink to="/register"><input type='submit' className='btn btn-success btn-block' value="Реєстрація" /></NavLink>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default SignIn;
*/
