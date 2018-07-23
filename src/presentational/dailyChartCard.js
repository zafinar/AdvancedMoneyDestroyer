import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'

const DailyChart = (props) =>{

let chartData = props.label
let previousAverageData = null
let previousHighData = null
let previousLowData = null
let mappedLabelData = chartData.map(day =>{return(
day.label
)})
let mappedPlotData = chartData.map(day =>{
if (day.marketAverage > 0) {
previousAverageData = day.marketAverage
return(
day.marketAverage
)}
else if(day.average > 0) {
previousAverageData = day.average
return(day.average)
}
else {
  return (previousAverageData)
}
})

let mappedLowPlotData = chartData.map(day =>{
  if (day.marketLow > 0) {
  previousLowData = day.marketLow
  return(
  day.marketLow
  )}
  else if(day.low > 0) {
  previousLowData = day.low
  return(day.low)
  }
  else {
    return (previousLowData)
  }
})

let mappedHighPlotData = chartData.map(day =>{
  if (day.marketHigh  > 0){
  previousHighData = day.marketHigh
  return(
  day.marketHigh
  )}
  else if(day.high > 0) {
  previousHighData = day.high
  return(day.high)
  }
  else{
    return (previousHighData)
  }
})



let plottedChart = {

    labels: mappedLabelData,
    datasets: [
      {
        borderColor: 'rgba(255,255,255,1)',
        fill: false,
        label: `Average`,
        data: mappedPlotData,
        backgroundColor:[
          'rgba(255,255,255,1)'
        ]
      }
    ,

      {
      fill: 0,
      label: `High`,
      data: mappedHighPlotData,
      backgroundColor: [
        'rgba(146,228,133,1)'
      ]
    }
  ,

    {
    fill: 0,
    label: `Low`,
    data: mappedLowPlotData,
    backgroundColor: [
      'rgba(228,133,133,1)'
    ]
    }
  ]

}
console.log(plottedChart)

return(
  <div className="chart">
  <Line
    width  ="1200"
    height ="900"
    data = {plottedChart}
    options={{
      maintainAspectRatio: false,
      responsive: false,
      responsiveAnimationDuration: 0
  }}/>
  </div>)

}


export default DailyChart
