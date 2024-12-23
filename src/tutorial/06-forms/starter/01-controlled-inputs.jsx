import { useState } from 'react'
import { data } from '../../../data'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    // do something
    console.log(e.target.value)
    console.log(name, email)
    if (!name || !email) return
    const fakeID = Date.now()
    // console.log(fakeID)
    const newUser = { id: fakeID, name }
    const updateUsers = [...users, newUser]
    setUsers(updateUsers)
    setName('')
    setEmail('')
  }
  const removeUser = (id) => {
    const updateUsers = users.filter((person) => person.id !== id)
    setUsers(updateUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>control inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name=""
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            name=""
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      <h4>users</h4>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              type="button"
              className="btn "
              onClick={() => removeUser(user.id)}
            >
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default ControlledInputs
