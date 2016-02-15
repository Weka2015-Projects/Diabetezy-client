import React, {Component} from 'react'
import {Link} from 'react-router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts/bundle/highcharts'

var config = {
  title: {
    text: 'Weekly Blood Sugar Levels'
  },
  xAxis: {
    categories: ['Feb 1', 'Feb 1', 'Feb 1','Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7']
  },
  series: [{
    data: [12, 10.5, 10.4, 12.2, 14, 17, 13.6, 14.5, 21.4, 19.1, 9.6, 5.4]
  }],

}

class BloodTestChart extends Component {
    componentDidMount() {
       let chart = this.refs.chart.getChart()
       chart.series[0].addPoint({x: 10, y:12})
     }

    render() {
      return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
    }
}

export default BloodTestChart
