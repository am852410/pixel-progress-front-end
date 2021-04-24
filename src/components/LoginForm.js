import React, {Component} from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import Register from "./RegisterModal"

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  state = { username: '', password: ''}

  handleChange = (e, { name, value }) => {
    this.setState({ [name] : value });
  }

  loggingUser = async (e) => {
    console.log('loggingUser')
    console.log(this.state)
    e.preventDefault()
    const url = this.props.baseURL + '/users/login'
    const loginBody = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include" // SENDING COOKIES
      })

      if (response.status === 200) {
        this.props.getGoals()
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  render() {
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form onSubmit={this.loggingUser}>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                name='username'
                placeholder='Username'
                onChange={this.handleChange}

              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                name='password'
                label='Password'
                type='password'
                onChange={this.handleChange}

              />

              <Button content='Login' primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Register
            getGoals={this.props.getGoals}
            baseURL={this.props.baseURL}
            />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    )
  }
}
