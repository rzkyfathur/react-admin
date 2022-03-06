import React from 'react'

import "./Featured.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function Featured() {
    return (
        <div className="featured">
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,211</span>
                    <span className="featured-money-rate down">
                        -12.3 <ArrowDownward className="money-icon"/>
                    </span>
                </div>
                <span className="featured-sub">
                    Compared Last Month
                </span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Sales</span>
                <div className="featured-money-container">
                    <span className="featured-money">$1,211</span>
                    <span className="featured-money-rate down">
                        -10.3 <ArrowDownward className="money-icon"/>
                    </span>
                </div>
                <span className="featured-sub">
                    Compared Last Month
                </span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Cost</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,231</span>
                    <span className="featured-money-rate up">
                        +2.4<ArrowUpward className="money-icon"/>
                    </span>
                </div>
                <span className="featured-sub">
                    Compared Last Month
                </span>
                
            </div>
        </div>
    )
}
