import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className="container-fluid Home">
            <div className="row">
                <div className="col first d-flex flex-column align-items-center justify-content-center p-3 m-3">
                    <div><h1> Just<span style={{color:'rgb(228, 119, 35)'}}>FRIENDS</span></h1></div>
                    <div className="text-center"><h3>A social media for you with you and to you just like democracy.</h3></div>
                    <div>
                    <Link to="/login"><button className="d-inline-block btn btn-dark m-3 px-3">LogIn</button></Link>
                    
                    <Link to="/signup"><button className="d-inline-block btn btn-dark m-3">Signup</button> </Link>
                    </div>
                </div>
                <div className="col second"></div>
            </div>
        </div>
    )
}
