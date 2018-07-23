import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'

const spreadChartCard = (props) =>{
  let bidPrice = props.label.bids.map(bid =>{
    return(bid.price)})

  let bidSize = props.label.bids.map(bid =>{
    return(bid.size)
  })


  let askPrice = props.label.asks.map(ask =>{
    return(ask.price)
  })

  let askSize = props.label.asks.map(ask =>{
    return(ask.size)
  })


let mappedLabelData = bidPrice.concat(askPrice)
let mappedPlotData = bidSize.concat(askSize)

let plottedChart = {
    labels: mappedLabelData,
    datasets: [
      {
        fill: false,
        label: `Bid/Ask`,
        data: mappedPlotData,
        backgroundColor:[
          'rgba(228,133,133,1)',
          'rgba(228,133,133,1)',
          'rgba(228,133,133,1)',
          'rgba(228,133,133,1)',
          'rgba(228,133,133,1)',
          'rgba(146,228,133,1)',
          'rgba(146,228,133,1)',
          'rgba(146,228,133,1)',
          'rgba(146,228,133,1)',
          'rgba(146,228,133,1)'
        ]
      }
  ]

}
console.log(plottedChart)

return(
  <div className="chart" style={{display:"inline"}}>
  <Bar
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


export default spreadChartCard
