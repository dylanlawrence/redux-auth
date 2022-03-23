import React, {Component} from "react";
import Chart from 'react-apexcharts'

export default class LineChart extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: 'apexchart'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }]
        }
    }
    render() {

        return (
            // @ts-ignore
            <Chart options={this.state.options} series={this.state.series} type="line" height={320} />
        )
    }
}

