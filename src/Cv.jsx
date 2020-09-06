import React, { Component } from 'react'
import axios from "axios"

export class Cv extends Component {
  state = {
    workExperience: [],
    education: []
  }

  componentDidMount() {
    axios.get('./src/data/workExperience.json')
    .then(response => {
      this.setState({
        workExperience: response.data
      })
    })
  }

  render() {
    const workExperiences = this.state.workExperience;
    let workExperiencesList;

    if (workExperiences.length > 0) {
      workExperiencesList = workExperiences.map((workExp) => {
        return (
          <div id={"workExperience-" + workExp.id} key={workExp.id}>
            <h3 className="ui header">{workExp.title}</h3>
          </div>
        )
      })
    }
    return (
      <div className="ui main container">
        <h1 id="cv-header" className="ui header">CV</h1>
        {workExperiencesList}
      </div>
    )
  }
}

export default Cv
