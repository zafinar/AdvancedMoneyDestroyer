import React from 'react'

const spreadCard = (props) => {

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



  let key = `${props.label.quote.symbol}bid/ask`


  return(
    <div>
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

export default spreadCard
