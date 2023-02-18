import React from "react";
import { RussiaSelector } from "../first/RussiaSelector/RussiaSelector";
import { Chart1 } from "../../charts/chart1/Chart1";
import { Chart2 } from "../../charts/chart1/Chart2";
import './container1.css'

export class DashContainer1 extends React.Component {
    render() {
        return (
            <div className="dash-container1">
                <Chart1 />
                <Chart2 />
            </div>
        )
    }
}