import React, {Component} from "react"
import Step from "./Step"

export default class Steps extends Component {

  render () {
    return (
      <table>

      {
        this.props.sessions.map(session => {
          return (
            <colgroup key = {`${session}-group-key`}
            span={this.props.steps.length}>
            </colgroup>
          )
        })
      }

      <tbody>
      <tr>
          <td className="hide" rowSpan="2" key="hiddenCell"></td>
          {
            this.props.sessions.map((session, i) => {
              return (
                <th key={`${i}-header`} className="sessionHeaders" colSpan={this.props.steps.length} scope="colgroup">{session}</th>
              )
            })
          }
      </tr>

      <tr>

        {
          this.props.sessions.map((session, s) => {
            return (
              this.props.steps.map((step, i) => {
                return (
                  <th key={`${s}-${i}-header`}
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

            <tr key={`${r}-row`}>
            <th className="reps" scope="row" key={`${r}-row-header`}>{rep}</th>
            {
              this.props.sessions.map((session, i) => {
                return (
                  this.props.steps.map((step, j) => {
                    return (
                      <Step
                      key={`${r}-${i}-${j}`}
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
