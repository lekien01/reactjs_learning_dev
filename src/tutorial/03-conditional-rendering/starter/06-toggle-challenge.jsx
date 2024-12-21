import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(null)
  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false)
  //     return
  //   }
  //   setShowAlert(true)
  // }

  return (
    <div>
      {showAlert ? (
        <div>
          <button className="btn" onClick={() => setShowAlert(!showAlert)}>
            login
          </button>
          <Alert />
        </div>
      ) : (
        <div>
          <button className="btn" onClick={() => setShowAlert(!showAlert)}>
            log out
          </button>
          <AnotherAlert />
        </div>
      )}
    </div>
  )
}

const Alert = () => {
  return <div className="alert alert-danger">You can log in</div>
}

const AnotherAlert = () => {
  return <div className="alert alert-danger"> You can log out</div>
}
export default ToggleChallenge
