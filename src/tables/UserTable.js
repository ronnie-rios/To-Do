import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.action}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Nothing today</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
