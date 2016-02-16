import React, {Component} from 'react'
import {Link} from 'react-router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts/bundle/highcharts'
import moment from 'moment'
import {connect} from 'react-redux'


const getChartData = (tests) => {
  return tests.map(function(test) {
    return [
    moment.unix(test.get('timestamp')).format("MM/DD/YYYY, h:mm"),
    test.get('value')
    ]
  })
}


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
           labels: { formatter: function() { return Highcharts.dateFormat('%a %d %b', this.value) },
           dateTimeLabelFormats: {
                    minute: '%H:%M',
                    hour: '%H:%M',
                    day: '%e. %b',
                    week: '%e. %b',
                    month: '%b \'%y',
                    year: '%Y'
                }
              }
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
    data: []
  }],
}



class BloodTestChart extends Component {
    componentDidMount() {
       let chartData = getChartData(this.props.tests).toJS()
       let chart = this.refs.chart.getChart()
       chart.series[0].setData(chartData)
       console.log(chartData)
     }

    render() {
      return (
      <div>
      <Link to={`/home`}>Home</Link><br/>
      <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
      </div>)
    }
}

function mapStateToProps(state) {
  return {
    tests: state.get('tests')
  }
}


export default connect(mapStateToProps)(BloodTestChart)
