import { useState } from 'react'

import { data } from '../../../data'

const firstPerson = [
  {
    id: 1,
    name: 'Kien',
    age: 30,
    hobby: 'soccer',
  },
]

const secondPerson = [
  {
    id: 1,
    name: 'john',
    age: 30,
    hobby: 'reading book',
  },
]

const UseStateObject = () => {
  const [name, newName] = useState('Kien')
  const [age, newAge] = useState(30)
  const [hobby, newHobby] = useState('soccer')

  const updateName = () => {
    newName('john')
    newAge(31)
    newHobby('Reading Book')
  }

  const [firstPer, secondPer] = useState(firstPerson[0])

  const updateObject = () => {
    secondPer(secondPerson[0])
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{hobby}</h1>
      <button type="button" className="btn" onClick={updateName}>
        Hello World
      </button>
      <h1>{firstPer.name}</h1>
      <button type="button" className="button" onClick={updateObject}>
        Hello
      </button>
    </div>
  )
}

export default UseStateObject
