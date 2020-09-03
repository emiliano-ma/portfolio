import React from 'react'
import { UndrawDesignerLife } from "react-undraw-illustrations"

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
        <div class="column">
          <UndrawDesignerLife primaryColor='#12283a' height='200px' />
        </div>
        <div class="column">
          <h1 id="about-header" className="ui header">About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusamus dignissimos. Eaque eligendi ratione inventore consequatur omnis aspernatur doloribus voluptate id ad atque delectus corporis corrupti odio rerum laudantium aliquam eos non, cum totam illum deleniti, dolore repellat, rem reprehenderit. Ratione velit voluptate ipsum, tempore illo nisi a reiciendis quia labore expedita veritatis et corporis!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
