import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormExampleCaptureValues extends Component {
  state = { name: '', username: '', password: '', submittedName: '', submittedUsername: '', submittedPassword:'' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, username, password } = this.state

    this.setState({ submittedName: name, submittedUsername: username, submittedPassword: password })
  }

  render() {
    const { name, username, password, submittedName, submittedUsername, submittedPassword} = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>

            <Form.Input
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Username'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
            <Form.Button content='Register' />

        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, username, password }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedUsername, submittedPassword }, null, 2)}</pre>
      </div>
    )
  }
}

export default FormExampleCaptureValues
