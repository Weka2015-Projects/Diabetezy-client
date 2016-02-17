import React, {Component} from 'react'
import {Link} from 'react-router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts/bundle/highcharts'

<<<<<<< HEAD
function chartData() {
  return {
    labels: ["Feb 9", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"],
    datasets: [
      {
				label: "Blood Test Results",
	      strokeColor: "rgba(7,70,170,1)",
	    	pointColor: "rgba(100,21,100,100)",
	     	fillColor:"rgba(255,220,220,220)",
	      pointStrokeColor: "#eee",
	    	data: [8, 10, 9, 12, 4, 10, 9, 7]
      },
      {
				label: "test case",
				strokeColor: "rgba(200,20,220,20)",
	      pointColor: "rgba(0,0,0,0)",
	      fillColor:"rgba(0,220,220,0)",
	      pointStrokeColor: "rgba(255,220,220,0)",
	      data: [0, 30, 0, 0, 0, 0, 0],
	      scaleShowLabels:false,
	      showToolTips: false
=======
// var sevenDayChart = filter through by most recent 7 days and put values into data array
// unix week is 604800 seconds



var config = {
chart: {
          borderColor: '#010d64',
          borderWidth: 3,
          borderRadius: 6,
          type: 'line'
>>>>>>> merge
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

<<<<<<< HEAD
const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 10,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
=======
>>>>>>> merge
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
