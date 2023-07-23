import React from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css";

function AdminNav() {
  return (
    <div className="container-nav-admin">
      <div className="nav-links-nav-admin">
        <Link to="/admin-profile/home" className="linknav-admin">
          Home
        </Link>
        <Link to="/admin-profile/report" className="link-nav-admin">
          Report
        </Link>
        <Link to="/admin" className="link-nav-admin">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default AdminNav;
