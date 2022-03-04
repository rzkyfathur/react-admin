import React from 'react'
import Chart from '../../chart/Chart'
import Featured from '../../featuredinfo/Featured'
import { userData } from '../../../data'
import WidgetSm from '../../widgetsm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
        <Featured/>
        <Chart data={userData} title="User anlytics" grid/>
        <div className="home-widget">
            <WidgetSm/>
            <WidgetLg/>
        </div>
        </div>
    )
}
