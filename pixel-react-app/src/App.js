import 'semantic-ui-css/semantic.min.css'
import './App.css';

import React, {Component} from "react"
import Goal from "./Goal"
import NewForm from "./NewForm"

import { Button, Icon } from 'semantic-ui-react'

import IconButton from "./components/IconButton"

import 'semantic-ui-css/semantic.min.css'
import { Container, Header, List } from "semantic-ui-react";

import pkg from 'semantic-ui-react/package.json'
import CreateModal from "./components/CreateModal"




let baseURL = ''
// const p = (x) => {console.log(x)}

// p(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}
// p(`current base URL: ${baseURL}`)

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

  deleteGoal = async (id) => {

    const url = baseURL + "/goals/" + id

    try {
      const response = await fetch(url, {method: "DELETE"})

      if (response.status === 200){

        const index = this.state.goals.findIndex(goal => goal._id === id)
        const copyGoals = [...this.state.goals]
        copyGoals.splice(index, 1)
        this.setState({
          goals: copyGoals
        })
      }

    }
    catch(error){
      console.log('error: ', error)
    }
  }

  fillStep = (e) => {
    e.preventDefault()
    document.getElementById(`${e.target.id}`).classList.toggle('clickedStep')
  }

  componentDidMount(){
this.getGoals()
}

  render() {
    return (
      <div className='App'>
        <h1>Pixel Progress</h1>
        <CreateModal
        addGoal={this.addGoal}
        baseURL={baseURL}
        />

        {this.state.goals.map(goal => {
          return (
            <>
              <h3>{goal.name} &#160;&#160;
              <IconButton className="IconButton" icon={'edit outline'}/>
              <IconButton className="IconButton" icon={'trash alternate'} deleteGoal={() => {this.deleteGoal(goal._id)}}/>
              </h3>


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
