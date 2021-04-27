import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export default class Register extends Component {
  state = { name: "", username: "", password: "" };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  register = async e => {
    e.preventDefault();
    console.log("register function");
    console.log(this.state);

    const url = this.props.baseURL + "/users/signup";
    const registerBody = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    };
    try {
      console.log(`try user registration`)
      console.log(registerBody)
      console.log(url)
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(registerBody),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status === 200) {
        console.log('response succeeded');
        this.props.getGoals();
      } else {
        console.log(response.status)
      }
    } catch (err) {
      console.log("Error => ", err);
    }
    this.props.closeModal()
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.register}>
          <Form.Input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Button content="Register" />
        </Form>
      </div>
    );
  }
}
