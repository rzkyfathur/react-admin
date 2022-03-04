import React from 'react'
import "./WidgetSm.css"
import Avatar from "../../avatar.jpg"

import { Visibility} from '@material-ui/icons'

export default function WidgetSm() {
  return (
    <div className="widget-sm">
      <span className="widget-sm-title">
        New join members
      </span>
      <ul className="widget-lists">
        <li className="widget-item">
          <img src={Avatar} alt="avatar" className="widget-sm-avatar" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Anna Garcia</span>
            <span className="widget-sm-job">Ui Ux Designer</span>
          </div>
          <button className="button-widget-sm">
            <Visibility className="icon-widget-sm"/>
            Display
          </button>
        </li>
        <li className="widget-item">
          <img src={Avatar} alt="avatar" className="widget-sm-avatar" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Anna Garcia</span>
            <span className="widget-sm-job">Ui Ux Designer</span>
          </div>
          <button className="button-widget-sm">
            <Visibility className="icon-widget-sm"/>
            Display
          </button>
        </li>
        <li className="widget-item">
          <img src={Avatar} alt="avatar" className="widget-sm-avatar" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Anna Garcia</span>
            <span className="widget-sm-job">Ui Ux Designer</span>
          </div>
          <button className="button-widget-sm">
            <Visibility className="icon-widget-sm"/>
            Display
          </button>
        </li>
        <li className="widget-item">
          <img src={Avatar} alt="avatar" className="widget-sm-avatar" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Anna Garcia</span>
            <span className="widget-sm-job">Ui Ux Designer</span>
          </div>
          <button className="button-widget-sm">
            <Visibility className="icon-widget-sm"/>
            Display
          </button>
        </li>
        <li className="widget-item">
          <img src={Avatar} alt="avatar" className="widget-sm-avatar" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Anna Garcia</span>
            <span className="widget-sm-job">Ui Ux Designer</span>
          </div>
          <button className="button-widget-sm">
            <Visibility className="icon-widget-sm"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
