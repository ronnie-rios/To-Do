import React from 'react'
import UserTable from './tables/UserTable'

const App = () => {
  return (
    <div className="container">
      <h1>To Do</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>add item</h2>
        </div>    
      </div>
      <div className="flex-large">
        <h2>View Items</h2>
        <UserTable />
      </div>
    </div>
  )
}

export default App
