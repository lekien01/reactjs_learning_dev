import { useContext } from 'react'
import React, { useState, createContext } from 'react'
import NavLinks from './Navlinks'

export const NavbarContext = createContext()

// customer hook

export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Kien' })
  const logout = () => {
    setUser(null)
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  )
}

export default Navbar
