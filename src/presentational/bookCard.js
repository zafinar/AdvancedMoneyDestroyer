import React from 'react'

const bookCard = (props) => {
  let quote = props.label.quote

  let bids = props.label.bids.map(bid =>{
    return(
  <tr id="bids">
  <td>
  {bid.price}/{bid.size}
  </td>
  </tr>)

  })

  let asks = props.label.asks.map(ask =>{
    return(
  <tr id="asks">
  <td>
  {ask.price}/{ask.size}
  </td>
  </tr>)

  })

  while (bids.length < 5 ){
    bids.push(
        <tr id="bids">
        <td>
        N/A
        </td>
        </tr>
    )
  }
  while (asks.length < 5){
    asks.push(
      <tr id="asks">
      <td>
      N/A
      </td>
      </tr>
    )
  }
  let key = `${quote.symbol}bid/ask`


  return(
    <div>
      <h1>{quote.latestPrice} - {quote.latestTime} {quote.latestSource} </h1>
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

      <table id="spreadTable" key ={key}>
        <tc>
        <th id="bid">BID</th>
        {bids.slice(0,5)}
        </tc>

        <tc>
        <th id="ask">ASK</th>
        {asks.slice(0,5)}
        </tc>
      </table>

    </div>

  )
}

export default bookCard
