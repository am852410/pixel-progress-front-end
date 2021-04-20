import React, {Component} from "react"

export default class Step extends Component {
  constructor(props) {
    super(props)

  }
  render () {

    return (
      <td
        id={`${this.props.rep}-${this.props.session}-${this.props.step}`}
        onClick={this.props.fillStep}
      >
      </td>
    )
  }
}
