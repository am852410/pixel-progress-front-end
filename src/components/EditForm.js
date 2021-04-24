import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class FormExampleCaptureValues extends Component {
  state = {
    name: this.props.goal.name,
    days: this.props.goal.days,
    steps: this.props.goal.categories,
    week_start_dates: this.props.goal.week_start_dates
  };

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value.includes(",") ? value.split(",") : value });

  handleSubmit = async e => {
    e.preventDefault();
    const url = this.props.baseURL + "/goals/" + this.props.goal._id;

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        name: this.state.name,
        days: this.state.days,
        week_start_dates: this.state.week_start_dates,
        categories: this.state.steps,
        user_id: "newFormUser"
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    this.props.getGoals();
    this.props.closeModal();
  };

  render() {
    const {
      name,
      days,
      steps,
      week_start_dates,
      submittedName,
      submittedDays,
      submittedSteps,
      submittedWeek_start_dates
    } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Goal Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <Form.Input
            label="Tier 1 Session Headers"
            name="days"
            value={days}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Tier 2 Step Headers"
            name="steps"
            value={steps}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Weeks or Repetitions"
            name="week_start_dates"
            value={week_start_dates}
            onChange={this.handleChange}
          />
          <Form.Button content="Submit" />
        </Form>
      </div>
    );
  }
}

export default FormExampleCaptureValues;
