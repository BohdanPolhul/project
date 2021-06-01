import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Header/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './Profile/Profile'
import SignIn from '../Auth/SignIn'
import { useSelector } from 'react-redux'
const Home = ({isAuth,SetisAuth,data,setData}) =>{
    const [message,setMessage] = useState([])
    return(
        <BrowserRouter>
            <div>
                
                <Header isAuth={isAuth} SetisAuth={SetisAuth} data={data}/>
                <Route exact path="/"  render={ () =><Profile data={data} message={message} setMessage={setMessage} isAuth={isAuth}/> }/>
                {!isAuth && <Route exact path="/admin"  render={ () => <SignIn SetisAuth={SetisAuth} setData={setData}/>}/>}
            </div>
        </BrowserRouter>
        
    )
}
export default Home;