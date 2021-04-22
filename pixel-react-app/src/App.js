import './App.css';
import React, {Component} from "react"
import Goal from "./Goal"
let baseURL = ''
const p = (x) => {console.log(x)}

p(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}
p(`current base URL: ${baseURL}`)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: [],
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
    this.getGoals = this.getGoals.bind(this)
    }
    componentDidMount(){
  this.getGoals()
}
    getGoals () {
      p('getting goals from api')

      fetch(baseURL + '/goals')
        .then(data => {
          return data.json()},
          err => console.log(err))
        .then(parsedData => console.log(parsedData),
         err => console.log(err))



  }

  fillStep = (e) => {
    e.preventDefault()
    document.getElementById(`${e.target.id}`).classList.toggle('clickedStep')
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
