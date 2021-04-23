import './App.css';
import React, {Component} from "react"
import Goal from "./Goal"
import NewForm from "./NewForm"
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

  addGoal = (newGoal) => {
    const copyGoals = [...this.state.goals]
    copyGoals.push(newGoal)
    this.setState({
      goals: copyGoals,
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
              <h3>{goal.name}</h3>
              <Goal
              key={`${goal.name}-goal`}
              name={goal.name}
              sessions={goal.days}
              steps={goal.categories}
              reps={goal.week_start_dates}
              fillStep={this.fillStep}
              />
            </>
          )
        })}

        <br/>
        <NewForm
          addGoal={this.addGoal}
          baseURL={baseURL}
        />
        <br/>

      </div>
    )
  }
}
