import { Person } from './person'
import React from 'react'
import { people } from '../../../data'

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return (
          <div>
            <Person key={person.name} {...person} />
          </div>
        )
      })}
    </div>
  )
}

export default List
