import './App.css';
import React, {Component} from "react"
import Goal from "./Goal"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessions: ['TU','WE','TH','SA'],
      steps: ['Class','Lab','Homework','Stretch'],
      reps: [
        'March 30',
        'April 6',
        'April 13',
        'April 20',
        'April 27',
        'May 4',
        'May 11',
        'May 18',
        'May 25',
        'June 1',
        'June 8'
      ]
    }
  }

  fillStep = (e) => {
    e.preventDefault()

    let thisID = e.target.id
    console.log(`${thisID} clicked`)
    document.getElementById(`${thisID}`).classList.toggle('clickedStep')
  }


  render() {
    return (
      <div className='App'>
        <h1>Pixel Progress</h1>
        <Goal
        sessions={this.state.sessions}
        steps={this.state.steps}
        reps={this.state.reps}
        fillStep={this.fillStep}
        />
      </div>
    )
  }
}
