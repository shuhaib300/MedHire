import React, { useState } from 'react';
import './AdminLogin.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import {updateAdminPassword} from '../../../store'
import {useDispatch} from 'react-redux'

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.adminData);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleUsername = (e) => {
    setEmail(e.target.value);
  }; 
  const handleNewUsername = (e) => {
    setNewEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const foundUser = admin.find((admin) => admin.email === email && admin.password === password);
    if (foundUser) {
      navigate('/admin-profile/home');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleChangePassword = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePasswordChange = () => {
    const foundAdmin = admin.find((admin) => admin.email === newEmail);
    if (foundAdmin) {
      // Dispatch action to update the admin's password
      dispatch(updateAdminPassword({ newEmail, newPassword }));
      setShowModal(false);
    } else {
      alert('Admin email not found. Password not changed.');
    }
  };

  return (
    <div className="container-admin">
      <div className="login-box-admin">
        <div className="login-heading-admin">
          <h1 className="heading-login-admin">Admin</h1>
        </div>
        <form onSubmit={handleForm}>
          <div className="username-input-container-admin">
            <input
              className="username-input-box-admin form-control"
              type="email"
              placeholder="Username"
              value={email}
              onChange={handleUsername}
            />
          </div>
          <div className="username-input-container-admin">
            <br />
            <input
              className="username-input-box-admin form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="username-input-container-admin">
            <button type="submit" className="button-login-admin btn btn-primary">
              Login
            </button>
            <button
              type="button"
              className="change-password-button btn btn-secondary"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal-container">
          <div className="modal-content card">
            <div className="modal-header">
              <h5 className="modal-title">Change Password</h5>
              <button type="button" className="close" onClick={handleModalClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={newEmail}
                  onChange={handleNewUsername}
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  value={newPassword}
                  onChange={handleNewPassword}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handlePasswordChange}>
                Save Password
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
