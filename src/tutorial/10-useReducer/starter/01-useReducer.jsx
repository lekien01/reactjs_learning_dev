import React from 'react'
import { data, people } from '../../../data'
import { useState, useReducer } from 'react'

const defaultState = {
  people: data,
}

const reducer = (state, action) => {
  if (action.type === 'Clear_List') {
    return { ...state, people: [] }
  }
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }

  const clearList = () => {
    dispatch({ type: 'Clear_List' })
    // setPeople([])
  }

  const resetList = () => {
    // setPeople(data)
  }

  console.log(state)

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
