import React, {Component} from "react"
import Steps from "./Steps"

export default class Sessions extends Component {
  constructor(props) {
    super(props)

  }
  render () {
    return (
      <div>
        <col></col>
        {
          this.props.sessions.map(session => {
            return (
              <colgroup
              span={this.props.sessions.length}>
              </colgroup>
            )
          })
        }
        <tr>
            <td id="hide" rowSpan="1"></td>
            {
              this.props.sessions.map((session, i) => {
                return (
                  <th colSpan={this.props.sessions.length} scope="colgroup">{session}</th>
                )
              })
            }
        </tr>

        <Steps
        sessions={this.props.sessions}
        steps={this.props.steps}
        reps={this.props.reps}
        fillStep={this.props.fillStep}
        reps={this.props.reps}
        />

      </div>
    )
  }
}
