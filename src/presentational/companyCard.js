import React from 'react'

const companyCard = (props) => {
  let company = props.label
  return(
  <div className="dataContainer" style={{height:"400",width:"600"}}>
    <label>Name:</label> {company.companyName}<br/>
    <label>Exchange:</label> {company.exchange}<br/>
    <label>Industry:</label> {company.industry}<br/>
    <label>Website:</label> {company.website}<br/>
    <label>Description:</label> {company.description}<br/>
    <label>CEO:</label> {company.CEO}<br/>
    <label>Stock Issue Type:</label> {company.issueType}<br/>
    <label>Sector:</label> {company.sector}<br/>
  </div>

  )
}


export default companyCard
