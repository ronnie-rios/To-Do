import React, {useState} from 'react'

const AddUserForms = (props) => {
    const initialFormState = { id: null, title: '', action: '' }
    const [item, setItem] = useState(initialFormState)
    
    const handleInputChange = (event) => {
        const {title, value} = event.target
        setItem({...item,[title]: value})
    }
    return (
        <form>
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
            <button>Add new item</button>
        </form>
    )
}

export default AddUserForms
