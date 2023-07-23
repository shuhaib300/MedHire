import React from 'react';
import { Link } from 'react-router-dom';

const HrNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/profile">
          Profile
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" to="/hr-profile/home">
              Home
            </Link>
            <Link className="nav-link" to="/hr">
              logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HrNavBar;
