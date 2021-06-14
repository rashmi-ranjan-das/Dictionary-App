import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Cookies, useCookies} from 'react-cookie'
import { instanceOf } from 'prop-types';


const Logout = () => {
        const [cookies, setCookie, removeCookie] = useCookies(['Token']);
        const handleClick = (e) => {
            removeCookie('Token', {path: '/'})
            window.location.href = 'http://localhost:3000/'
        }
        return(
            <div className="text-center my-5">
                <h3>Are you sure you want to logout ?</h3>
                <button className="btn btn-danger" onClick={handleClick}>Logout</button>
            </div>
        )
    
}

export default Logout;