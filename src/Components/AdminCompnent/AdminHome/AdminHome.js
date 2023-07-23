import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { adminDeleteUser, adminEditeUserRole } from '../../../store'

const AdminHome = () => {
  const users = useSelector((state) => state.admin.users);
  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    
    dispatch(adminDeleteUser(id));
  };

  const handleEditUser = (id) => {
   dispatch(adminEditeUserRole(id))
  };

  return (
    <div>
      <h1>User Management</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>
                <button className="danger" onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="primary" onClick={() => handleEditUser(user.id)}>
                  Change
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminHome;
