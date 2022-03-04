import React from 'react'
import "./WidgetLg.css"
import Avatar from "../../avatar.jpg"

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"button widget-button-" + type}>Approved</button>;
    };
    return (
        <div className="widget-lg">
            <span className="widget-lg-title">Latest Transactions</span>
            <div className="widget-item">
                <table className="widget-lg-table">
                    <tr className="widget-lg-tr">
                        <th className="widget-lg-th">Customers</th>
                        <th className="widget-lg-th">Date</th>
                        <th className="widget-lg-th">Amount</th>
                        <th className="widget-lg-th">Status</th>
                    </tr>
                    <tr>
                        <td className="widget-lg-tr-image">
                            <img src={Avatar} alt="" className="widget-lg-avatar" />
                        Customers</td>
                        <td className="widget-lg-td">2 June 2022</td>
                        <td className="widget-lg-td">$155.00</td>
                        <td className="widget-lg-tr">
                            <Button type="approved"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="widget-lg-tr-image">
                            <img src={Avatar} alt="" className="widget-lg-avatar" />
                        Customers</td>
                        <td className="widget-lg-td">2 June 2022</td>
                        <td className="widget-lg-td">$155.00</td>
                        <td className="widget-lg-tr">
                            <Button type="pending"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="widget-lg-tr-image">
                            <img src={Avatar} alt="" className="widget-lg-avatar" />
                        Customers</td>
                        <td className="widget-lg-td">2 June 2022</td>
                        <td className="widget-lg-td">$155.00</td>
                        <td className="widget-lg-tr">
                            <Button type="declined"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="widget-lg-tr-image">
                            <img src={Avatar} alt="" className="widget-lg-avatar" />
                        Customers</td>
                        <td className="widget-lg-td">2 June 2022</td>
                        <td className="widget-lg-td">$155.00</td>
                        <td className="widget-lg-tr">
                            <Button type="approved"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
