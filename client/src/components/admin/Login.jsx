
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin from './Admin.jsx';
import Navbar from '../Navbar.jsx';



class Login extends React.Component {

  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: "",
      password: "",
      typedUN: "",
      typedPW: "",
      isLoggedIn: this.props.isLoggedIn
    }
  }

  // Using a class based component here because we're accessing DOM refs

  handleSignOut(e) {
    e.preventDefault();
    this.setState({
      username: '',
      password: ''
    })
    // if (this.state.enteredUN === "random guy" && this.state.enteredPW === "password123"){

    // }
  }

  handleChangeUsername(e) {
    e.preventDefault();
    let user = e.target.value;
    this.setState({
      typedUN: user
    });
  }

  handleChangePW(e) {
    e.preventDefault();
    let pw = e.target.value;
    this.setState({
      typedPW: pw
    });
  }
  handleSignIn(e) {
    e.preventDefault();
    this.setState({
      username: this.state.typedUN,
      password: this.state.typedPW
    })
    // if (this.state.enteredUN === "random guy" && this.state.enteredPW === "password123"){

    // }
  }

  render() {
    if (this.state.username === "randomguy" && this.state.password === "password123"){
      return (
        <div>

        <Admin/>

        </div>
      )
    } else {
      return (
        <div>
        <form  onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="enter you username" onChange={this.handleChangeUsername.bind(this)}/>
          <input type="password" ref="password" placeholder="enter password" onChange={this.handleChangePW.bind(this)} />
          <input type="submit" value="Login" />
        </form>


        </div>
      )
    }

  }

}

export default Login;

