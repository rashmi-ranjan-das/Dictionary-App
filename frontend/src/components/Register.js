import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken"

export default class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({...this.state, [name]: value});
    //console.log(this.state);
  }

  handleRegister = (e) => {
    e.preventDefault();
    let {password2, ...y} = this.state;
    axios.post('http://127.0.0.1:8000/api/users/', y)
    .then(res =>  {
      for(var i in this.state){
        this.state[i] = '';
      }
      location.reload()
    })
    .catch(err => console.log(err))
  }
    render(){
        return(
            <div className="container my-2">
      <div className="text-center my-4">
      <h2 className="text-secondary">Registration Form</h2>
      </div>
      <div className="row">
        <form method="post">
          <div className="row">
            <div className="col">
              <label for="firstname">First Name:</label>
              <input className="form-control" onChange={this.handleChange} type="text" id="firstname" name="first_name" required placeholder="First Name"></input>
            </div>
            <div className="col">
              <label for="lastname">Last Name:</label>
              <input className="form-control" onChange={this.handleChange} type="text" id="lastname" name="last_name" required placeholder="First Name"></input>
            </div>
          </div><br></br>
          <div className="form-group">
            <label for="email">Email Address: </label>
            <input type="email" required onChange={this.handleChange} placeholder="Email Address" className="form-control" id="email" name="email"></input>
          </div><br></br>
          <div className="form-group">
            <label for="username">Username: </label>
            <input type="text" required onChange={this.handleChange} placeholder="Username" className="form-control" id="username" name="username"></input>
          </div><br></br>
          <div className="form-group">
            <label for="password">Enter Password: </label>
            <input type="password" required onChange={this.handleChange} placeholder="Enter Password" className="form-control" id="password" name="password"></input>
          </div><br></br>
          <div className="form-group">
            <label for="username">Confirm Password: </label>
            <input type="password" required onChange={this.handleChange} placeholder="Confirm Password" className="form-control" id="password2" name="password2"></input>
          </div>
          <div className="text-center my-3">
            <button type="submit" className="btn btn-success px-4" onClick={this.handleRegister}>Register</button>
          </div>
        </form>
      </div>
    </div>
        )
    }
}