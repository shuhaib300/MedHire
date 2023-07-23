import React from 'react';
import { useSelector } from 'react-redux';

const AdminReport = () => {
  const users = useSelector((state) => state.admin.users);

  // Calculate the counts of admins and users
  const adminCount = users.filter((user) => user.role === 'admin').length;
  const userCount = users.filter((user) => user.role === 'user').length;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">User Count</h5>
              <p className="card-text">Total Users: {users.length}</p>
              <p className="card-text">Total Admins: {adminCount}</p>
              <p className="card-text">Total Users (excluding Admins): {userCount}</p>
            </div>
          </div>
        </div>
        {users.map((user) => (
          <div key={user.id} className="col-md-6 col-lg-4">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Phone: {user.phone}</p>
                <p className="card-text">Role: {user.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReport;
