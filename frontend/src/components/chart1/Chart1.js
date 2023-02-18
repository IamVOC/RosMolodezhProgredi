import React, { Component } from "react";
import Chart from "react-apexcharts";
import './Chart1.css'

export class Chart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          animations: {
            easing: 'easeinout',
            speed: 750,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
          },
          FontFamily : {
            // fontFamily : 
          },
          foreColor: '#ffffff',

        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 67]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="charts-container">
            <Chart className="chart"
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
            />
            <Chart className="chart"
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
