import React from 'react'

const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <div>
          <div>Hello There, {user?.name?.toUpperCase()}</div>
          <button className="btn" onClick={logout}>
            Log out
          </button>
        </div>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}

export default UserContainer
