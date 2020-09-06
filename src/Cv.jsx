import React, { Component } from 'react'
import axios from "axios"
import CvCard from './CvCard'

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
  // componentDidMount() {
  //   axios.get('./src/data/education.json')
  //   .then(response => {
  //     this.setState({
  //       education: response.data
  //     })
  //   })
  // }

  render() {
    const workExperiences = this.state.workExperience;
    let workExperiencesList;

    if (workExperiences.length > 0) {
      workExperiencesList = workExperiences.map((workExp) => {
        return (
          <div id={"workExperience-" + workExp.id} key={workExp.id}>
            <CvCard workExp={workExp} />
          </div>
        )
      })
    }

    
    

    return (
      <div className="ui main container">
        <h1 id="cv-header" className="ui header">CV</h1>
        <h3>Work Experience</h3>

        <div className="ui stackable two column grid">
          {workExperiencesList}
        </div>
        <h3>Education</h3>

      </div>
    )
  }
}

export default Cv
