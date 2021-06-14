import React, { Component } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import {Cookies} from 'react-cookie';

class Menu extends Component{

    state = {
        cred: document.cookie.split('=')[1]
    }

    render(){
        const userLoggedIn = this.state.cred !== undefined;
        console.log(userLoggedIn)
        return(
         <div>
             <div className="menuStyle">
                 <ul>
                     {
                         userLoggedIn ? (
                            <React.Fragment>
                            <li><Link className="a" to="/dictionary">Dictionary</Link></li>
                            <li><Link className="a" to="/logout">Logout</Link></li>
                            </React.Fragment>
                         ) : (
                            <React.Fragment>
                            <li><Link className="a" to="/">Register</Link></li>
                            <li><Link className="a" to="/login">Login</Link></li>
                            </React.Fragment>
                         )
                     }
                 </ul>
             </div>
         </div>   
        )
    }
}

export default Menu;