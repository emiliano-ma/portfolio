import React from 'react'

const CvItemStudy = ({ study }) => {
  return (
    <>
      <div class="ui items padding">
        <div class="item">
          <div class="image">
            <img src={study.image}/>
          </div>
          <div class="content">
            <a class="header">{study.degree}</a>
            <div class="meta">
              <a className="ui" target="_blank" href={study.url}>{study.school}</a>
              <span>{study.location}</span>
            </div>
            <div class="description">
              <p>{study.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CvItemStudy