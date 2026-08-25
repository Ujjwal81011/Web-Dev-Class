import React from 'react'


const Student = (props) => {
    const {id,name,marks} = props;
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{marks}</td>
    </tr>
  )
}


export default Student;