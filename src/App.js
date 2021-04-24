import 'semantic-ui-css/semantic.min.css'
import './App.css';

import React, {Component} from "react"
import Goal from "./Goal"

import { Button, Icon } from 'semantic-ui-react'

import IconButton from "./components/IconButton"

import 'semantic-ui-css/semantic.min.css'
import { Container, Header, List } from "semantic-ui-react";

import pkg from 'semantic-ui-react/package.json'
import CreateModal from "./components/CreateModal"
import EditModal from "./components/EditModal"
import LoginModal from "./components/LoginModal"




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
        <LoginModal />
        <br/><br/>
        <CreateModal
        getGoals={this.getGoals}
        baseURL={baseURL}
        />

        {this.state.goals.map(goal => {
          return (
            <>
              <h3>{goal.name} &#160;&#160;
              <EditModal
                className="IconButton"
                getGoals={this.getGoals}
                baseURL={baseURL}
                goal={goal}
                goals={this.state.goals}
                />

              <IconButton
                className="IconButton"
                icon={'trash alternate'}
                actionFunction={() => {this.deleteGoal(goal._id)}}/>
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



      </div>
    )
  }
}
