import React, { useEffect, useState } from "react";

const FetchCURD = () => {
  const [users, setUsers] = useState([]);
  const [stateUsers, setStateUsers] = useState({
    id: "",
    name: "",
    address: "",
  });
  const addUsers = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setStateUsers((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const getUsers = async () => {
    const data = await fetch("http://localhost:5000/users");
    const userData = await data.json();
    setUsers(await userData);
  };
  const insertUser = () => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(stateUsers),
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => alert(error.message));
    alert("User Inserted!");
  };
  const updateUser = () => {
    fetch(`http://localhost:5000/users/${stateUsers.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(stateUsers),
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => alert(error.message));
    alert("User Updated!");
  };
  const deleteUser = () => {
    fetch(`http://localhost:5000/users/${stateUsers.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => alert(error.message));
    alert("User Deleted!");
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container d-flex flex-column justify-contents-center align-items-center">
      <h4 className="text-center">User Information</h4>
      <form
        className="d-flex flex-column justify-contents-center align-items-center 
      gap-3 bg-warning p-3 rounded rounded-2"
      >
        <input
          type="text"
          name="id"
          value={stateUsers.id}
          onChange={addUsers}
          placeholder="Enter user id"
        />
        <input
          type="text"
          name="name"
          value={stateUsers.name}
          onChange={addUsers}
          placeholder="Enter user name"
        />
        <input
          type="text"
          name="address"
          value={stateUsers.address}
          onChange={addUsers}
          placeholder="Enter user address"
        />
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary rounded rounded-2"
            onClick={insertUser}
          >
            Insert
          </button>
          <button
            className="btn btn-primary rounded rounded-2"
            onClick={updateUser}
          >
            Update
          </button>
          <button
            className="btn btn-primary rounded rounded-2"
            onClick={deleteUser}
          >
            Delete
          </button>
        </div>
      </form>
      <h2>List of Users</h2>
      <table className="table table-dark">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className="table-warning">
          {users.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchCURD;
