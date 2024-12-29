import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions'
import { data, people } from '../../../data'

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }

  if (action.type === REMOVE_ITEM) console.log(action)
  let newPeople = state.people.filter(
    (person) => person.id !== action.payload.id
  )
  return { ...state, people: newPeople }

  // return state
  throw new Error(`No Match "${action.type}" - action type`)
}

export default reducer
