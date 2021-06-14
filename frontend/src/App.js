import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Register from './components/Register';
import Menu from  './components/Menu'
import Login from './components/Login'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logout from './components/Logout'
import {CookiesProvider} from 'react-cookie'
import Dictionary from './components/Dictionary'

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken"

class App extends Component{
  render(){ 
    return(
    <CookiesProvider>
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/dictionary" component={Dictionary} />
          </Switch>
        </BrowserRouter>
      </div>
    </CookiesProvider>
  )};
}

export default App;
