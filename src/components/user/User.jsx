import "./User.css"
import Avatar from "../../avatar.jpg"
import { CalendarToday, EmailOutlined, LocationSearchingOutlined, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
                <Link to="/createUser">
                    <button className="button-add-user">Create</button>
                </Link>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src={Avatar} alt=""  className="user-show-img"/>
                        <div className="user-show-top-title">
                            <span className="user-show-username">
                                Christen Alexsen
                            </span>
                            <span className="user-show-job">
                                Ui Ux Designer
                            </span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                        <span className="user-show-title">Account Details</span>
                        <div className="user-show-bottom-info">
                            <PermIdentity className="user-show-icon"/>
                            <span className="user-show-info">cristensen12</span>
                        </div>
                        <div className="user-show-bottom-info">
                            <CalendarToday className="user-show-icon"/>
                            <span className="user-show-info">08.22.2000</span>
                        </div>
                        <span className="user-show-title">Account Details</span>
                        <div className="user-show-bottom-info">
                            <PhoneAndroid className="user-show-icon"/>
                            <span className="user-show-info">+62 222 334 21</span>
                        </div>
                        <div className="user-show-bottom-info">
                            <EmailOutlined className="user-show-icon"/>
                            <span className="user-show-info">christ22@gmail.com</span>
                        </div>
                        <div className="user-show-bottom-info">
                            <LocationSearchingOutlined className="user-show-icon"/>
                            <span className="user-show-info">Bogor Jawabarat, Indonesa</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update-title">
                        Edit
                    </span>
                    <form className="user-update-from">
                            <div className="user-updaet-left">
                                <div className="user-update-item">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" placeholder="Christensen" className="user-update-input"/>
                                </div>
                                <div className="user-update-item">
                                    <label htmlFor="username">Full Name</label>
                                    <input type="text" placeholder="Christensen alexen" className="user-update-input"/>
                                </div>
                                <div className="user-update-item">
                                    <label>No Telp</label>
                                    <input type="text" placeholder="+62 222 334 21" className="user-update-input"/>
                                </div>
                                <div className="user-update-item">
                                    <label>Email</label>
                                    <input type="text" placeholder="christ22@gmail.com" className="user-update-input"/>
                                </div>
                                <div className="user-update-item">
                                    <label>Address</label>
                                    <input type="text" placeholder="Bogor Jawabarat, Indonesa" className="user-update-input"/>
                                </div>
                            </div>
                            <div className="user-update-right">
                                <div className="user-update-upload">
                                    <img src={Avatar} className="user-update-img" />
                                    <label htmlFor="file" className="user-update-icon"><Publish className="user-update-icon"/></label>
                                    <input type="file" id="file" style={{display: "none"}}/>
                                </div>
                                <button className="user-update-button">
                                    Update
                                </button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}
