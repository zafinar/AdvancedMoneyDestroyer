import React from 'react'
import './presentationalcss/presentational.css'

const earningsCard = (props) =>{
let earnings = props.label.earnings.map(earning => {return(
  <tr>
  <td>{earning.fiscalPeriod} ending- {earning.fiscalEndDate}</td>
  <td>{earning.actualEPS}</td>
  <td>{earning.consensusEPS}</td>
  <td>{earning.estimatedEPS}</td>
  </tr>

)})
let key = `${props.label.earnings.symbol}-earnings`
return(
<div>
  <table id="table" key={key}>
  <tr>
  <th>Quarter</th>
  <th>EPS</th>
  <th>Consensus EPS</th>
  <th>Estimated Eps</th>
  </tr>
{earnings}
  </table>
</div>
)
}

export default earningsCard
