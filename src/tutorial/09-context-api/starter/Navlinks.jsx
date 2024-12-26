import React from 'react'
import UserContainer from './UserContainer'

const Navlinks = () => {
  return (
    <div className='"nav-container'>
      <ul className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
      </ul>
      <UserContainer />
    </div>
  )
}

export default Navlinks
