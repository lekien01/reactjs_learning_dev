const ErrorExample = () => {
  let count = 0
  const handleClick = () => {
    count += 1
    console.log(count)
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
