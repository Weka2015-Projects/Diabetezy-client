import React, {Component} from 'react'
import {Link} from 'react-router'
import Chart from 'c3-react'
console.log(Chart)
import {Line as LineChart} from 'react-chart.js';

class DashboardComponent extends Component {
  render() {
  var chart = c3.generate({
         bindto: '#chart1',
         data: {
           json: data,
           keys: {
               x: 'date',
               value: ['requests', 'revenue']
           },
           type: 'spline',
           types: { 'revenue': 'bar' },
           axes: {
             'requests': 'y',
             'revenue': 'y2'
           }
         },
         axis: {
             x: { type: 'timeseries' },
             y2: { show: true }
         }
     })


    return (
      <div className="dashboard-component container">
        <div id="testchart"></div>
        <Chart data={chartData} element='testchart' type='Line' />
      </div>
    )
  }
}

export default DashboardComponent
