import { useState } from 'react'

const ErrorExample = () => {
  const [count, newCount] = useState(0)
  const handleClick = () => {
    newCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Hello
      </button>
    </div>
  )
}

export default ErrorExample
