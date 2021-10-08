import React, {useState} from 'react'

const EditItemForm = (props) => {
    const [item, setItem] = useState(props.currentItem)
    
    const handleInputChange = (event) => {
        const {title, value} = event.target
        setItem({...item,[title]: value})
    }
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                
                props.updateItem(item.id, item)
            }}
        >
            <label>Title</label>
            <input 
                type='text' 
                name="title" 
                value={item.title}
                onChange={handleInputChange}
             />
            <label>Action</label>
            <input 
                type='text' 
                name="title" 
                value={item.action}
                onChange={handleInputChange}
            />
            <button>Update User</button>
            <button
                onClick={()=> props.setEditing(false)}
            >cancel
            </button>
        </form>
    )
}

export default EditItemForm
