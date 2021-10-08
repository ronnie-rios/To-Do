import React, {Fragment, useState} from 'react'
import AddUserForms from './forms/AddUserForms';
import UserTable from './tables/UserTable'
import EditItemForm from './forms/EditItemForm';


const App = () => {
  const itemData = [
    {id: 1, title: 'Clean', action: 'clean the bedroom'},
    {id: 2, title: 'HW', action: 'complete homework'},
    {id: 3, title: 'Fridge', action: 'organize fridge'},
  ]

  const [items, setItems ] = useState(itemData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, title: '', action: '' }
  const [currentItem, setCurrentItem] = useState(initialFormState);

  const editRow = (item) => {
    setEditing(true)
    setCurrentItem({ id: item.id,
      title: item.title,
      action: item.action  
    })
  }

  const addItem = (item) => {
    item.id = items.length +1
    setItems([...items, item])
  }
  
  const deleteItem = (id) => {
    setItems(items.filter((item)=> item.id !== id))
  }

  const updateItem = (id, updatedItem) => {
    setEditing(false)
    setItems(items.map((item) => (item.id === id ? updatedItem : item)))
  }

  return (
    <div className="container">
      <h1>To Do</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
              <Fragment>
                <h2>Edit Item</h2>
                  <EditItemForm
                    editing={editing}
                    setEditing={setEditing}
                    currentItem={currentItem}
                    updateItem={updateItem} 
                  />
              </Fragment>
            ) : (
              <Fragment>
                <h2>add item</h2>
                <AddUserForms addItem={addItem} />
             </Fragment>  
            )}
      </div>
      <div className="flex-large">
        <h2>View Items</h2>
        <UserTable items={items} editRow={editRow} deleteItem={deleteItem} />
      </div>
    </div>
    </div>
  )
}

export default App
