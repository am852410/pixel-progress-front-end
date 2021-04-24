import React, {Component} from "react"
// const p = (x) => {console.log(x)}

export default class NewForm extends Component {
    constructor(props) {
      super(props)

      this.state = {

      }
    }

    handleChange = (e, field) => {

      this.setState({
        [field] : e.target.value.includes(',') ? e.target.value.split(',') : e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()

      fetch(this.props.baseURL + '/goals', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          type: this.state.type,
          days: this.state.days,
          week_start_dates: this.state.week_start_dates,
          categories: this.state.steps,
          user_id: 'newFormUser'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        return res.json()
      }).then(data => {
        this.props.addGoal(data)
        this.setState({
          name: '',
          type: '',
          days: '',
          week_start_dates: '',
          steps: ''
        })
      }).catch (error => console.error({'Error': error}))
    }



    render () {

      return (

        <form onSubmit= {(e)=>this.handleSubmit(e)}>

          <label htmlFor="name">Goal Name: </label>
          <input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e, "name") } value={this.state.name} />
          <br/>
          <label htmlFor="type">Goal Type: </label>
          <input type="text" id="type" name="type" onChange={ (e) => this.handleChange(e, "type") } value={this.state.type} />
          <br/>
          <label htmlFor="days">Days/Sessions: </label>
          <input type="text" id="days" name="days" onChange={ (e) => this.handleChange(e, "days") } value={this.state.days} />
          <br/>
          <label htmlFor="week_start_dates">Row Labels: </label>
          <input type="text" id="week_start_dates" name="week_start_dates" onChange={ (e) => this.handleChange(e, "week_start_dates") } value={this.state.week_start_dates} />
          <br/>
          <label htmlFor="steps">Steps: </label>
          <input type="text" id="steps" name="steps" onChange={ (e) => this.handleChange(e, "steps") } value={this.state.steps} />
          <br/>

          <input type="submit" value="Add New Goal" />
        </form>

      )
  }
}
