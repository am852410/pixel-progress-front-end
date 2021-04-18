import React, {Component} from "react"

export default class Goal extends Component {


  render() {

    return (
      <div>
          <table>
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
            <td id="hide" rowSpan="2"></td>
            {
              this.props.sessions.map((session, i) => {
                return (
                  <th colSpan={this.props.sessions.length} scope="colgroup">{session}</th>
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




        <tr>
          <th scope="row">Week 1</th>
          {
            this.props.sessions.map((session, i) => {
              return (
                this.props.steps.map((step, j) => {
                  return (
                    <td
                    id={`week1-${session}-${step}`}
                    onClick={this.props.fillStep}
                    >
                    </td>)
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
                  return (
                    <td
                    id={`week2-${session}-${step}`}
                    onClick={this.props.fillStep}
                    >
                    </td>)
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
