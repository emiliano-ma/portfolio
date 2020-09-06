import React, { Component } from 'react'
import axios from "axios"
import CvItemWork from './CvItemWork'
import CvItemStudy from './CvItemStudy'

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
    axios.get('./src/data/education.json')
    .then(response => {
      this.setState({
        education: response.data
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
            <CvItemWork workExp={workExp}/>
          </div>
        )
      })
    }

    const studies = this.state.education;
    let studiesList;

    if (studies.length > 0) {
      studiesList = studies.map((study) => {
        return (
          <div id={"study-" + study.id} key={study.id}>
            <CvItemStudy study={study} />
            {/* <CvItemWork study={study}/> */}
          </div>
        )
      })
    }

    return (
      <div className="ui main container">
        <h1 id="cv-header" className="ui header">CV</h1>
        <h2>Work Experience</h2>
        <div class="ui stackable two column grid">
          {workExperiencesList}
        </div>
        <h2>Education</h2>
        <div class="ui stackable two column grid">
          {studiesList}
        </div>
        <h2>Languages</h2>
        <h5>Spanish</h5>
        <p>Native language</p>
        <h5>English</h5>
        <p>Full professional proficiency</p>
        <h5>Portuguese</h5>
        <p>Professional working proficiency</p>
        <h5>Swedish</h5>
        <p>Limited working proficiency</p>
      </div>
    )
  }
}

export default Cv
