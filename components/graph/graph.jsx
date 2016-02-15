import React, {Component} from 'react'
import {Link} from 'react-router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts/bundle/highcharts'

// var sevenDayChart = filter through by most recent 7 days and put values into data array
// unix week is 604800 seconds



var config = {
chart: {
          borderColor: '#010d64',
          borderWidth: 3,
          borderRadius: 6,
          type: 'line'
      },
  title: {
    text: 'Weekly Blood Sugar Levels'
  },
  xAxis: {
  //categories: ['1455483473654', '1455483373654', '1455483373654','Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'],
    type: 'datetime',
    dateTimeLabelFormats: {
              hour: '%l:%M %p'
          },
           labels: {
                  formatter: function() {
                      return Highcharts.dateFormat('%a %d %b', this.value) }}
  },
  yAxis: {
    title: {
              enabled: true,
              text: 'BSL',
              style: {
                  fontWeight: 'normal'
            }
          }
  },
  legend: {
            enabled: false
        },
  credits: {
            enabled: true
        },
  series: [{
    name: 'BSL',
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
