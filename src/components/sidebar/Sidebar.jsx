import React from 'react'
import "./Sidebar.css"

import { LineStyle, Timeline, TrendingUp, PersonOutlineOutlined, StorefrontOutlined, AttachMoneyOutlined, BarChartOutlined, EmailOutlined, DynamicFeedOutlined, ChatBubbleOutline, WorkOutlineOutlined, ReportOffOutlined } from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item active">
                            <LineStyle className="sidebar-icon"/>
                            Home
                        </li>
                        <li className="sidebar-item">
                            <Timeline className="sidebar-icon"/>
                            Analytics
                        </li>
                        <li className="sidebar-item">
                           <TrendingUp className="sidebar-icon"/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item ">
                            <PersonOutlineOutlined className="sidebar-icon"/>
                            Users
                        </li>
                        <li className="sidebar-item">
                            <StorefrontOutlined className="sidebar-icon"/>
                            Products
                        </li>
                        <li className="sidebar-item">
                            <AttachMoneyOutlined className="sidebar-icon"/>
                            Transactions
                        </li>
                        <li className="sidebar-item">
                            <BarChartOutlined className="sidebar-icon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notiffications</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item ">
                            <EmailOutlined className="sidebar-icon"/>
                            Email
                        </li>
                        <li className="sidebar-item">
                            <DynamicFeedOutlined className="sidebar-icon"/>
                            Feedback
                        </li>
                        <li className="sidebar-item">
                           <ChatBubbleOutline className="sidebar-icon"/>
                            Message
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item ">
                            <WorkOutlineOutlined className="sidebar-icon"/>
                            Manage
                        </li>
                        <li className="sidebar-item">
                            <Timeline className="sidebar-icon"/>
                            Analytics
                        </li>
                        <li className="sidebar-item">
                           <ReportOffOutlined className="sidebar-icon"/>
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
