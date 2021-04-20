import React, {Component} from "react"
import Sessions from "./Sessions"
import Steps from "./Steps"

export default class Goal extends Component {


  render() {

    return (
      <div>
          <table>
            <Sessions
            sessions={this.props.sessions}
            steps={this.props.steps}
            reps={this.props.reps}
            fillStep={this.props.fillStep}
            />
          </table>
      </div>
    )
  }
}
