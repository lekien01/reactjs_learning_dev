import { useState } from 'react'

import { data, people } from '../../../data'
console.log(data)
console.log(people)

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    console.log(id)
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const clrPeople = () => {
    setPeople([])
  }

  return (
    <div>
      <ul>
        {people.map((person) => {
          const { id, name } = person
          return (
            <div>
              <li key={id}>
                <li>{name}</li>
                <button
                  type="button"
                  onClick={() => removePerson(id)}
                  className="btn"
                >
                  Remove
                </button>
              </li>
            </div>
          )
        })}
      </ul>
      <button type="button" onClick={() => clrPeople()}>
        Remove All
      </button>
    </div>
  )
}

export default UseStateArray
