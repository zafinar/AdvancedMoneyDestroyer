import React from 'react'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import SearchContainer from './searchContainer.js';

class StockRoute extends React.Component{

handleSubmit = (e) => {
  e.preventDefault()
  this.props.history.push(`/stocks/${this.props.searchvalue}`)
}

  render(){
    return(


      <form className="searchForm" onSubmit={this.handleSubmit}>

      <SearchContainer/>
      <p className="searchInstructions" id="text">Search for any stock ticker symbols. Use "," for multiple stocks and ":" for specific requests.</p> 
      </form>


  )
  }

}

const mapStateToProps = (state) =>({
  searchvalue: state.stocks.search
})

export default withRouter(connect(mapStateToProps,{})(StockRoute))
