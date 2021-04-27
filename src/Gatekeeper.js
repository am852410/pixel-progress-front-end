import "semantic-ui-css/semantic.min.css";
import "./App.css";

import React, { Component } from "react";
import Goal from "./Goal";





import CreateModal from "./components/CreateModal";
import EditModal from "./components/EditModal";



import App from "./App";
import LoginModal from "./components/LoginModal";
import LoginForm from "./components/LoginForm";
import { Icon, Button, Modal } from "semantic-ui-react";

export default class Gatekeeper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: null
    }

  }

  logUserInState = (user) => {
    console.log(`logging user in state`)
    console.log(`user's name is ${user.username}`)
    console.log(user)
    this.setState ({
      loggedIn: true,
      username: user.username
    })

  }

  render() {
    console.log('http://localhost:3000')
    return (
      this.state.loggedIn===true?
          <App />
          :
          <LoginForm
          baseURL={'http://localhost:3000'}
          logUserInState={this.logUserInState}
          />
    )
  }

}
