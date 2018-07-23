import React from 'react'
import './presentationalcss/presentational.css'

const newsCard = (props) =>{
 let news = props.label.map(report =>{
   let date = report.datetime.split("T")[0]
  return(
  <div>
    <a href={report.url}>{date}-{report.source}--{report.headline}</a>
    <hr className="style-eight"/>
  </div>
  )
 })
return(
<div className="dataContainer">
 <hr className="style-eight"/>
 {news}
</div>
)

}


export default newsCard
