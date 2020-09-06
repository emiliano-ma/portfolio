import React from 'react'
import { UndrawPresentation } from "react-undraw-illustrations"

const Hello = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable center two column grid">
        <div class="column">
          <UndrawPresentation primaryColor='#12283a' height='200px' />
        </div>
        <div class="column">
          <h1 id="about-header" className="ui header">Hello! World</h1>
          <p>
          And this is me, Emiliano. Here is where I show to the world my work as Full Stack Web Developer. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hello