import React from 'react'
import { NavLink } from 'react-router-dom'

const CvCard = ({ workExp }) => {
  return (
    <>
      
      <div class="ui card">
        {/* <div className="image">
          <img src={workExp.image} />
        </div> */}
        <div class="content">
          <h4 class="ui">{workExp.date}</h4>
          <h3 class="ui header">{workExp.title}</h3>
          <NavLink className="ui" to={workExp.url}>{workExp.company}</NavLink>
          <div class="description">{workExp.description}</div>
        </div>
      </div>
    </>
  )
}

export default CvCard
