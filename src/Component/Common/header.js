import React from 'react'
import { NavLink } from "react-router-dom";
import { ROUTES } from '../../Common/constant';
import "./header.css"
const Header = () => {
    return (
        <div className="header d-flex">
            <div className="nav-header">
                <NavLink exact to={ROUTES.DASHBOARD} className="color-black">
                    Home
                </NavLink>
            </div>
            <div className="nav-header">
                <NavLink  to={ROUTES.CLIENT} className="color-black">
                    Client
                </NavLink>
            </div>
            <div className="nav-header float-right">
                <NavLink  to={ROUTES.RECRUITER} className="color-black">
                    Recruiter
                </NavLink>
            </div>

        </div>
    )
}

export default Header
