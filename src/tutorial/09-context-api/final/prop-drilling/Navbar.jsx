import { useState, createContext } from 'react'
import NavLinks from './NavLinks'
import { NavbarContext } from '../context/Navbar'

export const NavBarContext = createContext()

console.log(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' })
  const logout = () => {
    setUser(null)
  }
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  )
}
export default Navbar
