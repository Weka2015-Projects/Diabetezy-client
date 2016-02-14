import React, {Component} from 'react'
import {Link} from 'react-router'
import {Line as LineChart} from 'react-chartjs';

function chartData() {
  return {
    labels: ["Feb 9", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"],
    datasets: [
      {
				label: "Blood Test Results",
	      strokeColor: "rgba(220,220,220,1)",
	    	pointColor: "rgba(220,220,220,1)",
	     	fillColor:"rgba(220,220,220,0)",
	      pointStrokeColor: "#fff",
	    	data: [8, 10, 9, 12, 4, 10, 9, 7]
      },
      {
				label: "test case",
				strokeColor: "rgba(220,220,220,0)",
	      pointColor: "rgba(220,220,220,0)",
	      fillColor:"rgba(220,220,220,0)",
	      pointStrokeColor: "rgba(220,220,220,0)",
	      data: [0, 30, 0, 0, 0, 0, 0],
	      scaleShowLabels:false,
	      showToolTips: false
      },
    ]
  }
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px'
  }

}

class BloodTestLineChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData()
    }
  }

  render() {
    return (
      <div style={styles.graphContainer}>
        <LineChart data={this.state.data}
          options={options}
          width="600" height="250"/>
				<div className="greenZone" style={styles.safeZone}></div>
      </div>
    )
  }
}

export default BloodTestLineChart
