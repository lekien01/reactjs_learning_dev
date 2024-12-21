import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(true)

  return (
    <div>
      {/* OR usually use to return default value */}
      <h2>{name || 'Return default value'}</h2>
      {/* AND usually use to contron when when want to return something */}
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}
      {isEditing ? <button>log in</button> : <button>log out</button>}
    </div>
  )
}
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h1>Random Component {name}</h1>
    </div>
  )
}

export default ShortCircuitExamples
