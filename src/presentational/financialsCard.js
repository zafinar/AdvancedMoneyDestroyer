import React from 'react'

const financialsCard = (props) => {
let symbol = props.label.symbol
const checkfunction = (argument) => {
  if (argument){
    return argument
  }
  else {
    return "N/A"
  }
}
console.log(props.label.financials)
let financials = props.label.financials.map(period =>{
  return(
  <tc>
  <tr><th>{checkfunction(period.reportDate).toLocaleString('en')}</th></tr>
  <tr><td>{checkfunction(period.grossProfit).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.costOfRevenue).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.operatingRevenue).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.totalRevenue).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.operatingIncome).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.netIncome).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.researchAndDevelopment).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.operatingExpense).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.currentAssets).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.totalAssets).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.totalLiabilities).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.currentCash).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.currentDebt).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.totalCash).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.totalDebt).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.shareholderEquity).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.cashChange).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.cashFlow).toLocaleString('en')}</td></tr>
  <tr><td>{checkfunction(period.operatingGainsLosses).toLocaleString('en')}</td></tr>
  </tc>

  )
})
let dateReported = props.label.financials.map(date =>{
  return(
  <th>date.reportDate</th>
  )
})
return(
  <div>
    <table id="table">
    <tc>
    <tr><th>Date Reported</th></tr>
    <tr><td>Gross Profit</td></tr>
    <tr><td>Cost of Revenue</td></tr>
    <tr><td>Operating Revenue</td></tr>
    <tr><td>Total Revenue</td></tr>
    <tr><td>Operating Income</td></tr>
    <tr><td>Net Income</td></tr>
    <tr><td>Research and Development</td></tr>
    <tr><td>Operating Expense</td></tr>
    <tr><td>Current Assets</td></tr>
    <tr><td>Total Assets</td></tr>
    <tr><td>Total Liabilities</td></tr>
    <tr><td>Current Cash</td></tr>
    <tr><td>Current Debt</td></tr>
    <tr><td>Total Cash</td></tr>
    <tr><td>Total Debt</td></tr>
    <tr><td>Shareholder Equity</td></tr>
    <tr><td>Cash Change</td></tr>
    <tr><td>Cash Flow</td></tr>
    <tr><td>Operating Gains/Losses</td></tr>
    </tc>
    {financials}
    </table>
  </div>
)


}

export default financialsCard
