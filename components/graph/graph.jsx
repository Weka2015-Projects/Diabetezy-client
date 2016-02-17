import React, {Component} from 'react'
import {Link} from 'react-router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts/bundle/highcharts'
import moment from 'moment'
import {connect} from 'react-redux'
import {List, toJS} from 'immutable'



const getChartData = (tests) => {
  return tests.map(function(test) {
    return [
    moment.unix(test.get('timestamp')).format("MM/DD/YYYY, h:mm"),
    test.get('value')
    ]
  })
}


const weekInUnix = 604800
const weekEndDate = moment().unix(new Date())
const weekStartDate = weekEndDate - weekInUnix
console.log(weekEndDate)



var config = {
chart: {
          borderColor: '#010d64',
          borderWidth: 3,
          borderRadius: 6,
          type: 'line'
      },
  title: { text: 'Weekly Blood Sugar Levels'},
  xAxis: {
     type: 'datetime',
     min: Number(weekStartDate * 1000),
     max: Number(weekEndDate * 1000),
     minorTickInterval: 6 * 3600 * 1000,
     minorTickLength:10,
     minorTickWidth: 1,
     minorGridLineWidth: 0

  },
  yAxis: {
    min: 0,
    max: 25,
    title: {
            enabled: true,
            text: 'mmol/L',
            style: { fontWeight: 'normal' }
            }


  },
  legend: { enabled: false },
  series: [
  {
    name: 'BSL',
    data: [],
    pointStart: Number(weekStartDate * 1000),
    pointInterval: 24 * 36e5 // one hour
  }
  ]
}

class BloodTestChart extends Component {


    componentDidMount() {
       let chartData = getChartData(this.props.tests).toJS()
       let chart = this.refs.chart.getChart()
       chart.series[0].setData(chartData)
       console.log('this props:', this.props.tests)

     }


    render() {
      return (
      <div>
      <Link to={`/home`}>Home |</Link>
      <Link to={`/diary`}> Diary |</Link>
      <Link to={`/alert`}> Alerts</Link><br/>
      <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
      </div>)
    }
}

function mapStateToProps(state) {
console.log('the state.get', state.get('tests'))
  return {
    tests: state.get('tests')
  }
}




export default connect(mapStateToProps)(BloodTestChart)
