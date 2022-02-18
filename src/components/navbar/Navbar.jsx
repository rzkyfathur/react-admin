import React from 'react'
import "./Navbar.css"
import Avatar from "../../avatar.jpg"

//icons
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function navbar() {
    return (
    <div className="navbar">
        <div className="nav-wripper">
            <div className="nav-left">
                <span className="logo">React Admin</span>
            </div>
            <div className="nav-right">
                <div className="nav-icons-container">
                    <NotificationsNone/>
                    <span className="badge-notif">2</span>
                </div>
                <div className="nav-icons-container">
                    <Language/>
                </div>
                <div className="nav-icons-container">
                    <Settings/>
                </div>
                <img src={Avatar} alt="Avatar"  className="avatar"/>
            </div>
        </div>
    </div>
    )
}
