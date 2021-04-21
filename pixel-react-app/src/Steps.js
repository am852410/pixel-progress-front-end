import React, {Component} from "react"
import Step from "./Step"

export default class Steps extends Component {

  render () {
    return (
      <table>

      {
        this.props.sessions.map(session => {
          return (
            <colgroup
            span={this.props.sessions.length}>
            </colgroup>
          )
        })
      }

      <tbody>
      <tr>
          <td className="hide" rowSpan="2"></td>
          {
            this.props.sessions.map((session, i) => {
              return (
                <th className="sessionHeaders" colSpan={this.props.sessions.length} scope="colgroup">{session}</th>
              )
            })
          }
      </tr>

      <tr>

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
        this.props.reps.map(rep => {
          return (

            <tr>
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
            </tr>

          )
        })
      }
      </tbody>
      </table>
    )
  }
}
