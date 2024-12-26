import React, { useState } from 'react'
import Navlinks from './Navlinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' })
  const logout = () => {
    setUser(null)
  }

  return (
    <nav className="navBar">
      <h5>Context API</h5>
      <Navlinks />
    </nav>
  )
}

export default Navbar
