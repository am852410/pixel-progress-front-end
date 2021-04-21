import React, {Component} from "react"
import Steps from "./Steps"

export default class Goal extends Component {


  render() {

    return (
            <Steps
            sessions={this.props.sessions}
            steps={this.props.steps}
            reps={this.props.reps}
            fillStep={this.props.fillStep}
            />
    )
  }
}
