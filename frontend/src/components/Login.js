import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import axios from 'axios';
import {Cookies, withCookies} from 'react-cookie';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken"

const credentials = new Cookies();

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    handleLogin = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('username', this.state.username)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
        axios.post('http://127.0.0.1:8000/gettoken/', formData, {headers : {'content-type': 'multipart/form-data'}})
        .then(res => {
          credentials.set('Token', res.data.token, { path : '/'}),
          console.log(credentials.get('Token'),
          window.location.href = "http://localhost:3000/dictionary/"
          )
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
      <div className="container my-4">
      <div className="text-center my-4">
      <h2 className="text-secondary">Login Form</h2>
      </div>
      <div className="row">
        <form method="post">
          <div className="row">
            
          </div><br></br>
          <div className="form-group">
            <label for="username">Username: </label>
            <input type="text" required onChange={this.handleChange} placeholder="Username" className="form-control" id="username" name="username"></input>
          </div><br></br>
          <div className="form-group">
            <label for="email">Email Address: </label>
            <input type="email" required onChange={this.handleChange} placeholder="Email Address" className="form-control" id="email" name="email"></input>
          </div><br></br>
          <div className="form-group">
            <label for="password">Enter Password: </label>
            <input type="password" required onChange={this.handleChange} placeholder="Enter Password" className="form-control" id="password" name="password"></input>
          </div><br></br>
          <div className="text-center my-3">
            <button type="submit" className="btn btn-success px-4" onClick={this.handleLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
        )
    }
}

export default Login;