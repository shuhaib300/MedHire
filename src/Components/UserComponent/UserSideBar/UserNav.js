import React from "react";
import {Link} from "react-router-dom";
import "./UserNav.css";

function UserNav() {
    return (
        <div className="container-user-nav">
            <div className="nav-links-user-nav">
                <Link to="/user-profile/profile" className="link-user-nav">
                    Home
                </Link>
                <Link to="/user-profile/notification" className="link-user-nav">
                    Notification
                </Link>
                <Link to="/login" className="link-user-nav">
                   Logout
                </Link>
            </div>
        </div>
    );
}

export default UserNav;
