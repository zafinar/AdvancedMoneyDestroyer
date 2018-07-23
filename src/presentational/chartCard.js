import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'

const Chart = (props) =>{
let chartData = props.label
let mappedLabelData = chartData.map(day =>{
  let month = day.date.split("-")[1]
  let numericDay = day.date.split("-")[2]
return(
`${month}-${numericDay}`
)})
let mappedPlotData = chartData.map(day =>{return(
day.close
)})

let mappedLowPlotData = chartData.map(day =>{return(
day.low
)})

let mappedHighPlotData = chartData.map(day =>{return(
day.high
)})



let plottedChart = {
    labels: mappedLabelData,
    datasets: [
      {
        borderColor: 'rgba(255,255,255,1)',
        fill: false,
        label: `Price At Close`,
        data: mappedPlotData,
        backgroundColor:[
          'rgba(255,255,255,1)'
        ]
      }
    ,

      {
      fill: 0,
      label: `Day High`,
      data: mappedHighPlotData,
      backgroundColor: [
        'rgba(146,228,133,1)'
      ]
    }
  ,

    {
    fill: 0,
    label: `Day Low`,
    data: mappedLowPlotData,
    backgroundColor: [
      'rgba(228,133,133,1)'
    ]
    }
  ]

}
console.log(plottedChart)

return(
  <div className="chart" style={{display:"inline"}}>
  <Line
    width  ="600"
    height ="400"
    data = {plottedChart}
    options={{
      maintainAspectRatio: false,
      responsive: false,
      responsiveAnimationDuration: 0
  }}/>

</div>)

}


export default Chart
