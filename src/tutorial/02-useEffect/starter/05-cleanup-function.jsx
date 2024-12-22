import { useEffect, useState } from 'react'
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log('render')
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Commponent
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {}
    window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
  }, [])
  return (
    <div>
      <h1>hello there </h1>
      <h1>j</h1>
    </div>
  )
}

export default CleanupFunction
