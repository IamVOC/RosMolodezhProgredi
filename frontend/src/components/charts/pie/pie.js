import React from "react";
import './pie.css'
import Chart from "react-apexcharts";

export class Pie extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [76, 7, 12, 5],
        options: {
            title :{
                text: "Популярность форумов",
                align: "center",
                margin: 15,
                style: {
                    fontSize: "12px",
                    fontWeight: "600",
                }
            },
            colors: ['#6247AA', '#8B61D7', '#A06CD5','#C19EE0', '#815AC0', '#DAC3E8'],
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Региональные', 'Окружные', 'Всероссийские', 'Муниципальные'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        <div id="chart">
            <Chart className="chart" options={this.state.options} series={this.state.series} type="pie" width={350} />
        </div>
        )
    }
}