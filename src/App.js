import React, {useState} from 'react'
import AddUserForms from './forms/AddUserForms';
import UserTable from './tables/UserTable'

const App = () => {
  const itemData = [
    {id: 1, title: 'Clean', action: 'clean the bedroom'},
    {id: 2, title: 'HW', action: 'complete homework'},
    {id: 3, title: 'Fridge', action: 'organize fridge'},
  ]

  const [items, setItems ] = useState(itemData);

  const addItem = (item) => {
    item.id = items.length +1
    setItems([...items, item])
  }
  
  return (
    <div className="container">
      <h1>To Do</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>add item</h2>
          <AddUserForms addItem={addItem} />
        </div>    
      </div>
      <div className="flex-large">
        <h2>View Items</h2>
        <UserTable items={items}/>
      </div>
    </div>
  )
}

export default App
