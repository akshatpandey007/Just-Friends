import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { api } from '../backendRoute';
import { useAuthUser } from '../Context';
import '../styles/NavBar.css'

export const Navbar = () => {
    let history = useHistory()
    let [user,updateUser] = useAuthUser()
   

    async function logOutHandler(e){
        try{
            let res = await axios.get(api.HOST + api.LOGOUT,{withCredentials : true});
            if(res.status ===  200){
                localStorage.removeItem('user')
                history.push('/login')
            }

        }catch(err){
            console.log("err...while logiing out")
        }
    }

    const NotSignedIn =  (
        <div >
        <nav className="navbar px-3 navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"> <h3> Just<span style={{color:'rgb(228, 119, 35)'}}>FRIENDS</span></h3> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            </ul> 
        </div>
        </nav>
        </div>
    );

    const SignedIn = (
        <div >
        <nav className="navbar px-3 navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"> <h3> Just<span style={{color:'rgb(228, 119, 35)'}}>FRIENDS</span></h3> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-end align-item-center" id="navbarSupportedContent">
            
            <button className="d-inline-block m-3 btn btn-dark" onClick={logOutHandler}>logout</button>
        </div>
            
        </nav>
        </div>
    )

    return user ? SignedIn : NotSignedIn;
}
