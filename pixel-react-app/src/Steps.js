import React, {Component} from "react"
import Step from "./Step"

export default class Steps extends Component {
  constructor(props) {
    super(props)

  }
  render () {
    return (
      <div>

      <tr>
      <td id="hide" rowSpan="1"></td>
        {
          this.props.sessions.map(session => {
            return (
              this.props.steps.map((step, i) => {
                return (
                  <th
                  className="rotate" scope="col">{step}</th>
                )
              })
            )
          })
        }
      </tr>


      {
        this.props.reps.map((rep, r) => {
          return (
            <div>
            <th className="reps" scope="row">{rep}</th>
            {
              this.props.sessions.map((session, i) => {
                return (
                  this.props.steps.map((step, j) => {
                    return (
                      <Step
                      rep={rep}
                      session={session}
                      step={step}
                      fillStep={this.props.fillStep}

                      />
                      )
                  })
                )
              }
            )
            }
            </div>
          )
        })
      }

      </div>
    )
  }
}
