import "semantic-ui-css/semantic.min.css";
import "./App.css";

import React, { Component } from "react";
import Goal from "./Goal";

import IconButton from "./components/IconButton";

import "semantic-ui-css/semantic.min.css";

import CreateModal from "./components/CreateModal";
import EditModal from "./components/EditModal";
import LoginModal from "./components/LoginModal";

// let baseURL = "https://pixel-progress-back-end.herokuapp.com";
let baseURL = "http://localhost:3003"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };
  }

  getGoals = () => {
    fetch(baseURL + "/goals")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          goals: data
        });
      });
  };

  logOut = () => {
    console.log(`logging out now`)
    fetch(baseURL + "/logout")
}

  deleteGoal = async id => {
    const url = baseURL + "/goals/" + id;

    try {
      const response = await fetch(url, { method: "DELETE" });

      if (response.status === 200) {
        const index = this.state.goals.findIndex(goal => goal._id === id);
        const copyGoals = [...this.state.goals];
        copyGoals.splice(index, 1);
        this.setState({
          goals: copyGoals
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  fillStep = e => {
    e.preventDefault();
    document.getElementById(`${e.target.id}`).classList.toggle("clickedStep");
  };

  componentDidMount() {
    this.getGoals();
  }

  render() {
    return (
      <div className="App">
        <h1>Pixel Progress</h1>
        <LoginModal baseURL={baseURL} getGoals={this.getGoals} />
        <IconButton
          className="IconButton"
          icon={"sign-out"}
          actionFunction={() => {
            this.logOut()
          }}
        />
        <br />
        <br />
        <CreateModal getGoals={this.getGoals} baseURL={baseURL} />

        {this.state.goals.map((goal, g) => {
          return (
            <>
              <h3 key={`${g}-h3`}>
                {goal.name} &#160;&#160;
                <EditModal
                  className="IconButton"
                  getGoals={this.getGoals}
                  baseURL={baseURL}
                  goal={goal}
                  goals={this.state.goals}
                />
                <IconButton
                  className="IconButton"
                  icon={"trash alternate"}
                  actionFunction={() => {
                    this.deleteGoal(goal._id);
                  }}
                />
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
          );
        })}
      </div>
    );
  }
}
