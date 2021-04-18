import React, {Component} from "react"
const p = (x) => (console.log(x))

export default class Goal extends Component {
  constructor(props) {
    super(props)
  }




  render() {
    const sessionLength= this.props.sessions.length
    const stepCount = sessionLength*this.props.steps.length
    p(sessionLength)
    p(stepCount)

    return (
      <div>
        <h2>Table</h2>
          <table>
          <col></col>
          {
            this.props.sessions.map(session => {
              return (
                <colgroup span={sessionLength}></colgroup>
              )
            })
          }
        <tr>
            <td rowspan="2"></td>
            {
              this.props.sessions.map((session, i) => {
                return (
                  <th colspan={this.props.sessions.length} scope="colgroup">{session}</th>
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
                    <th scope="col">{step}</th>
                  )
                })
              )
            })
          }
        </tr>
        <tr>
          <th scope="row">Week 1</th>

          {
            this.props.sessions.map((session, i) => {
              return (
                this.props.steps.map((step, j) => {
                  return (<td>{`${session}-${step}`}</td>)
                })
              )
            }
          )
          }

        </tr>

        <tr>
          <th scope="row">Week 2</th>
          {
            this.props.sessions.map((session, i) => {
              return (
                this.props.steps.map((step, j) => {
                  return (<td>{`${session}-${step}`}</td>)
                })
              )
            }
          )
          }
        </tr>
    </table>



      </div>

    )
  }
}
