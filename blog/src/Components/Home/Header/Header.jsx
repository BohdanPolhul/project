import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './Header.css'
const Header = ({isAuth,SetisAuth,data}) =>{
    const Exit=()=>{
        SetisAuth(false)
    }
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="navbar-collapse btn-toolbar justify-content-between" id="navbarNavAltMarkup">
                <div class="text-white mr-5">
                    {isAuth && <NavLink to="/"><button type="button" class="btn btn-outline-primary">Home</button></NavLink>}
                </div>
                <div className=" text-white mr-5">
                    {!isAuth && <NavLink to="/admin"><button type="button" class="btn btn-outline-primary">Admin</button></NavLink>}
                    {isAuth &&  <label for="exampleFormControlInput1" class="form-label">{data.admin.name}</label>}
                    {isAuth && <button type="button" class="btn btn-outline-secondary" onClick={Exit}>Вийти</button>}
                </div>
            </div>
            </nav> 
        </div>
    )
}
export default Header;