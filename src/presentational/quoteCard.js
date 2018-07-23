import React from 'react'
import './presentationalcss/presentational.css'

const quoteCard = (props) => {
  let quote = props.label
  let style = {}
  if(quote.change < 0){
     style = {
      display: "inline",
      color : "#cc3300"
    }}
    else if (quote.change === 0){
       style = {
        display: "inline",
        color: "#b3b3b3"
      }}
    else {
       style = {
      display: "inline",
      color: "#00cc44"
      }
    }
    console.log(style)
  return(
    <div className="dataContainer">
    <h1 style={style}> {quote.latestPrice}</h1><h1 style={{display:"inline"}}> - {quote.latestTime}</h1><br/>
      <label>Company:</label> {quote.companyName}<br/>
      <label>Exchange:</label>{quote.primaryExchange}<br/>
      <label>Sector:</label> {quote.sector}<br/>
      <label>Open/Close:</label> {quote.open}/{quote.close}<br/>
      <label>Daily Low/High</label> {quote.low}/{quote.high}<br/>
      <label>Volume:</label> {quote.latestVolume}<br/>
      <label>Previous Close:</label> {quote.previousClose}<br/>
      <label>Change:</label> {quote.change}<br/>
      <label>Average Daily Volume:</label> {quote.avgTotalVolume}<br/>
      <label>Bid(vol)/Ask(vol):</label> {quote.iexBidPrice}({quote.iexBidSize})/{quote.iexAskPrice}({quote.iexAskSize})<br/>
      <label>Market Cap:</label> {quote.marketCap}<br/>
      <label>PE Ratio:</label> {quote.peRatio}<br/>
      <label>52wk Range:</label> {quote.week52Low}/{quote.week52High}<br/>
      <label>YTD Change: </label>{quote.ytdChange}<br/>
    </div>
  )
}



export default quoteCard
