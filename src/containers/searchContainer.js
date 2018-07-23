import React, { Component } from 'react'

import { connect } from 'react-redux';
import { search } from '../actions/stockActions.js'

class SearchContainer extends React.Component{

handleChange = e => {
  this.props.search(e.target.value)
}

  render(){
    return(

      <input id="search" className="search" type="text" value={this.props.searchvalue} onChange={this.handleChange}/>

    )
  }
}

const mapStateToProps = (state) =>({
  searchvalue: state.stocks.search
})

export default connect(mapStateToProps,{search})(SearchContainer);
