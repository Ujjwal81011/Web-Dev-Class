import React from 'react'


const Student = (props) => {
    const {id,name,marks} = props;
  return (
    <div className="container mt-5">
  <table className="table table-bordered table-striped table-hover text-center">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Marks</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{marks}</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}


export default Student;