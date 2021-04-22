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
            span={this.props.sessions.length}>
            </colgroup>
          )
        })
      }

      <tbody>
      <tr key={'SessionHeaderRowKey'}>
          <td className="hide" rowSpan="2" key="hiddenCell"></td>
          {
            this.props.sessions.map((session, i) => {
              return (
                <th key={`${session}-header`} className="sessionHeaders" colSpan={this.props.sessions.length} scope="colgroup">{session}</th>
              )
            })
          }
      </tr>

      <tr key={'StepHeaderRowKey'}>

        {
          this.props.sessions.map(session => {
            return (
              this.props.steps.map((step, i) => {
                return (
                  <th key={`${session}-${step}-header`}
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

            <tr key={`${rep}-row`}>
            <th className="reps" scope="row" key={`${rep}-row`}>{rep}</th>
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
