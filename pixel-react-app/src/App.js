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
    }
    }

    getGoals = () => {
      fetch(baseURL + '/goals')
        .then(res => {return res.json()
        }).then(data => {
        this.setState({
          goals: data,
        })
      })

  }

  fillStep = (e) => {
    e.preventDefault()
    document.getElementById(`${e.target.id}`).classList.toggle('clickedStep')
  }

  componentDidMount(){
this.getGoals()
}

  render() {
    p('goals in render:')
    p(this.state.goals)
    return (
      <div className='App'>
        <h1>Pixel Progress</h1>
        {this.state.goals.map(goal => {
          return (
            <>
              <Goal
              key={`${goal.name}-goal`}
              sessions={goal.days}
              steps={goal.categories}
              reps={goal.week_start_dates}
              fillStep={this.fillStep}
              />
            </>
          )
        })}


      </div>
    )
  }
}
