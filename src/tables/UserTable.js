import React from 'react'

const UserTable = () => {
    return (
       <table>
           <thead>
               <th>Name</th>
               <th>Items</th>
               <th>Actions</th>
           </thead>
           <tbody>
               <tr>
                   <td>Item Data</td>
                   <td>user Data</td>
                   <td>
                       <button className="button">Edit</button>
                       <button className="button">Delete</button>
                   </td>
               </tr>
           </tbody>
       </table>
    )
}

export default UserTable
