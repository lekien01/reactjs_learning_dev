import { useState } from 'react'

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')

  // const x = 0
  // const y = 1
  // console.log(x && y)
  // console.log(y && x)
  // console.log(x || y)
  // console.log(y || x)
  // const displayName = (name) => {
  //   return name || 'Anonumous'
  // }
  // console.log(displayName('Kien'))
  // console.log(displayName())

  const codeExample = text || 'hello world'
  return (
    <div>
      <h1> Falsy or : {text || 'hello world'}</h1>
      <h1> Falsy or : {text && 'hello world'}</h1>
      <h1> Truthy or : {name || 'There is no name'}</h1>
      <h1> Truthy or : {name && 'There is no name'}</h1>
      {codeExample}
    </div>
  )
}
export default ShortCircuitOverview
