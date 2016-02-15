import React, {Component} from 'react'
import {Link} from 'react-router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts/bundle/highcharts'
import {users} from '../../test-data.json'
import moment from 'moment'


// get times from given user tests
const getChartTimeData = (user_id) => {
  var chartTimeData = []
  for (var i=0; i<(users[user_id].tests).length; i++ ) {
    chartTimeData.push(moment.unix(users[user_id].tests[i].timestamp).format("MM/DD/YYYY, h:mm"))
  }
  return chartTimeData
}

var chartTimes = getChartTimeData(0)

// get values from given user tests
const getChartValueData = (user_id) => {
  var chartValueData = []
  for (var i=0; i<(users[user_id].tests).length; i++ ) {
    chartValueData.push(users[user_id].tests[i].value)
  }
  return chartValueData
}
var chartValues = getChartValueData(0)


console.log(chartTimes)
console.log(chartValues)

var config = {
chart: {
          borderColor: '#010d64',
          borderWidth: 3,
          borderRadius: 6,
          type: 'line'
      },
  title: { text: 'Weekly Blood Sugar Levels'},
  xAxis: {
  categories: chartTimes,
    type: 'datetime',
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
    data: chartValues
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
