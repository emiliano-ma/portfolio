import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p id="footer"> Made with React {React.version}</p>
      <div className="info">
        <p>emilianomainero@gmail.com</p>
        <a target="_blank" href="https://www.linkedin.com/in/emilianomainero">LinkedIn</a>
        <a target="_blank" href="https://github.com/emiliano-ma">GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
// ui container column grid info