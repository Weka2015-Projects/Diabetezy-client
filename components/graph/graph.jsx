import React, {Component} from 'react'
import {Link} from 'react-router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts/bundle/highcharts'
import {users} from '../../test-data.json'

// var sevenDayChart = filter through by most recent 7 days and put values into data array
// unix week is 604800 seconds



const getChartTimeData = (user_id) => {
  var chartTimeData = []
  for (var i=0; i<(users[user_id].tests).length; i++ ) {
    chartTimeData.push(users[user_id].tests[i].timestamp)
  }
  return chartTimeData
}

const getChartValueData = (user_id) => {
  var chartValueData = []
  for (var i=0; i<(users[user_id].tests).length; i++ ) {
    chartValueData.push(users[user_id].tests[i].value)
  }
  return chartValueData
}


console.log(getChartTimeData(0))
console.log(getChartValueData(0))

var config = {
chart: {
          borderColor: '#010d64',
          borderWidth: 3,
          borderRadius: 6,
          type: 'line'
      },
  title: { text: 'Weekly Blood Sugar Levels'},
  xAxis: {
  categories: [getChartTimeData],
    type: 'datetime',
    dateTimeLabelFormats: {
              hour: '%l:%M %p'
          },
           labels: { formatter: function() { return Highcharts.dateFormat('%a %d %b', this.value) }}
  },
  yAxis: {
    title: {
            enabled: true,
            text: 'mmol/L',
            style: { fontWeight: 'normal' }
            }
  },
  legend: { enabled: false },
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
      return (
      <div>
      <Link to={`/home`}>Home</Link><br/>
      <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
      </div>)
    }
}

export default BloodTestChart
