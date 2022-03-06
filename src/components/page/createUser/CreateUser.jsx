import React from 'react'
import "./CreateUser.css"

export default function CreateUser() {
    return (
        <div className="create-user">
            <h1 className="create-user-title">New User</h1>
            <from className="create-user-form">
                <div className="create-user-item">
                    <label>Username</label>
                    <input type="text" placeholder="Smith"/>
                </div>
                <div className="create-user-item">
                    <label>FullName</label>
                    <input type="text" placeholder="Smith Antonio"/>
                </div>
                <div className="create-user-item">
                    <label>Email</label>
                    <input type="text" placeholder="SmithAntonio@gmail.com"/>
                </div>
                <div className="create-user-item">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </div>
                <div className="create-user-item">
                    <label>Phone</label>
                    <input type="number" placeholder="089998331"/>
                </div>
                <div className="create-user-item">
                    <label>Address</label>
                    <input type="number" placeholder="Bogor West java, Indonesia"/>
                </div>
                <div className="create-user-item">
                    <label>gender</label>
                    <div className="create-user-gender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="create-user-item">
                    <label>Active</label>
                    <select name="active" id="active" className="create-user-select">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="create-user-button">Create User</button>
            </from>
        </div>
    )
}
