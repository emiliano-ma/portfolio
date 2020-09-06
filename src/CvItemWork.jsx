import React from 'react'

const CvItemWork = ({ workExp }) => {
  return (
    <>
      <div class="ui items padding">
        <div class="item">
          <div class="image">
            <img src={workExp.image}/>
          </div>
          <div class="content">
            <a class="header">{workExp.title}</a>
            <div class="meta">
              <a className="ui" target="_blank" href={workExp.url}>{workExp.company}</a>
              <span>{workExp.location}</span>
            </div>
            <div class="description">
              <p>{workExp.date}</p>
            </div>
            <div class="extra">
              {workExp.description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CvItemWork