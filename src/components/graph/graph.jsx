import React, {Component} from 'react'
import {Link} from 'react-router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts'
import moment from 'moment'
import {connect} from 'react-redux'


const getChartData = (tests) => {
  const data = []
  tests.forEach(function(test) {
    data.push([
    moment.unix(test.get('timestamp')).format("MM/DD/YYYY, h:mm"),
    parseInt(test.get('value'))
    ])
  })
  return data
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
  labels: {
     enabled: false
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
  ],
}



class BloodTestChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidUpdate() {
     let chartData = getChartData(this.props.tests)
     let chart = this.refs.chart.getChart()
     chart.series[0].setData(chartData)
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
  console.log(state.toJS())
  return {
    tests: state.get('tests')
  }
}


export default connect(mapStateToProps)(BloodTestChart)
