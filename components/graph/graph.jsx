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


//var dataArray = newState.get('tests').map(function(test){
//  return test.get('timestamp')}).toArray()






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
           dateTimeLabelFormats: {
                    minute: '%H:%M',
                    hour: '%H:%M',
                    day: '%e. %b',
                    week: '%e. %b',
                    month: '%b \'%y',
                    year: '%Y'
                }

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
    data: []
  }
  ]
}

class BloodTestChart extends Component {


    componentDidMount() {
       let chartData = getChartData(this.props.tests)
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
