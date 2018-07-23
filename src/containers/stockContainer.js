import React from 'react'
import "../presentational/presentationalcss/presentational.css"

import { connect } from 'react-redux';
import { fetchStock } from '../actions/stockActions.js'
import { clearStock } from '../actions/stockActions.js'

import BookCard from '../presentational/bookCard.js'
import ChartCard from '../presentational/chartCard.js'
import CompanyCard from '../presentational/companyCard.js'
import DividendsCard from '../presentational/dividendsCard.js'
import EarningsCard from '../presentational/earningsCard.js'
import FinancialsCard from '../presentational/financialsCard.js'
import NewsCard from '../presentational/newsCard.js'
import OhlcCard from '../presentational/ohlcCard.js'
import PeersCard from '../presentational/peersCard.js'
import PriceCard from '../presentational/priceCard.js'
import QuoteCard from '../presentational/quoteCard.js'
import SplitsCard from '../presentational/splitsCard.js'
import SpreadCard from '../presentational/spreadCard.js'
import DailyChartCard from '../presentational/dailyChartCard.js'
import SpreadChartCard from '../presentational/spreadChartCard.js'
import QuarterlyChartCard from '../presentational/quarterlyChartCard.js'
import WeeklyChartCard from '../presentational/weeklyChartCard.js'
import BiannualChartCard from '../presentational/quarterlyChartCard.js'
import YearlyChartCard from '../presentational/quarterlyChartCard.js'
import TwoYearChartCard from '../presentational/quarterlyChartCard.js'
import FiveYearChartCard from '../presentational/quarterlyChartCard.js'






import StockRoute from './stockRoute.js'

let fetchInterval = null
let symbols = null
let types = null

class StockContainer extends React.Component{

  componentDidMount(){

  fetchInterval = setInterval(() => {
    symbols = this.props.match.params.stockId.split(":")[0]
    types = "quote,chart,financials,company,spread"

   if (this.props.match.params.stockId.split(":")[1]){
     types = this.props.match.params.stockId.split(":")[1]}

    this.props.fetchStock(symbols,types)
  },1000)
}

  componentWillUnmount () {
    clearInterval(fetchInterval)
    this.props.clearStock()
  }

  render(){
  let stockRender = null

  if (symbols){
    let symbolArray = symbols.toUpperCase().split(",")
    let typesArray = types.split(",")
     stockRender = symbolArray.map(symbol => {
      if (this.props.stock[symbol] != undefined){
      return(
      <div>
        <h1 class="text-center" id="text">{symbol}</h1>
        <hr/>
      <div className="flex-container" key={symbol}>

        {typesArray.map(type =>{
          if(type === "book"){return(<BookCard key={`${symbol}-${type}`} label={this.props.stock[symbol].book}/>)}
          else if(type === "chart"){return(<ChartCard key={`${symbol}-${type}`} name={symbol} label={this.props.stock[symbol].chart}/>)}
          else if(type === "company"){return(<CompanyCard key={`${symbol}-${type}`} label={this.props.stock[symbol].company}/>)}
          else if(type === "dividends"){return(<DividendsCard key={`${symbol}-${type}`} label={this.props.stock[symbol].dividends}/>)}
          else if(type === "earnings"){return(<EarningsCard key={`${symbol}-${type}`} label={this.props.stock[symbol].earnings}/>)}
          else if(type === "financials"){return(<FinancialsCard key={`${symbol}-${type}`} label={this.props.stock[symbol].financials}/>)}
          else if(type === "news"){return(<NewsCard key={`${symbol}-${type}`} label={this.props.stock[symbol].news}/>)}
          else if(type === "ohlc"){return(<OhlcCard key={`${symbol}-${type}`} label={this.props.stock[symbol].ohlc}/>)}
          else if(type === "peers"){return(<PeersCard key={`${symbol}-${type}`} label={this.props.stock[symbol].peers}/>)}
          else if(type === "price"){return(<PriceCard key={`${symbol}-${type}`} label={this.props.stock[symbol].price}/>)}
          else if(type === "quote"){return(<QuoteCard key={`${symbol}-${type}`} label={this.props.stock[symbol].quote}/>)}
          else if(type === "splits"){return(<SplitsCard key={`${symbol}-${type}`} label={this.props.stock[symbol].splits}/>)}
          else if(type === "spread"){return(<SpreadCard key={`${symbol}-${type}`} label={this.props.stock[symbol].book}/>)}
          else if(type === "chart-daily"){return(<DailyChartCard key={`${symbol}-${type}`} label={this.props.stock[symbol].chart}/>)}
          else if(type === "spread-chart"){return(<SpreadChartCard key={`${symbol}-${type}`} label={this.props.stock[symbol].book}/>)}
          else if(type === "chart-weekly"){return(<WeeklyChartCard key={`${symbol}-${type}`} label={this.props.stock[symbol].chart}/>)}
          else if(type === "chart-quarterly"){console.log(this.props.stock[symbol].chart); return(<QuarterlyChartCard key={`${symbol}-${type}`} label={this.props.stock[symbol].chart}/>)}
          else if(type === "chart-biannually"){return(<BiannualChartCard key={`${symbol}-${type}`} label={this.props.stock[symbol].chart}/>)}
          else if(type === "chart-yearly"){return(<YearlyChartCard key={`${symbol}-${type}`} label={this.props.stock[symbol].chart}/>)}
          else if(type === "chart-2year"){return(<TwoYearChartCard key={`${symbol}-${type}`} label={this.props.stock[symbol].chart}/>)}
          else if(type === "chart-5year"){return(<FiveYearChartCard key={`${symbol}-${type}`} label={this.props.stock[symbol].chart}/>)}

        })}
      </div>
      <hr/>
      </div>
    )}
    else{
      return(
      <div>
      <p class="text-center" id="text">Sorry we cannot find {symbol}, try a format like amd:quote,financials,chart-daily</p>
      </div>)
    }
    })
  }

    if(this.props.stock){
    return(
      <div>
        <StockRoute/>
        <div id="StockContainer">
          {stockRender}
        </div>
      </div>
    )}
    else{
      return(
        <div>
          <StockRoute/>
          <div id="StockContainer">
            <h1>Loading</h1>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) =>({
  stock: state.stocks.stock,
  searchvalue: state.stocks.search
})

export default connect(mapStateToProps,{fetchStock,clearStock})(StockContainer)
