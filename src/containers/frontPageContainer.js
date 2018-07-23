import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StockRoute from './stockRoute.js'
import StockContainer from './stockContainer.js';



class FrontPageContainer extends React.Component{


render(){
  return(
  <Router>
    <div className="frontPageContainer">
      <Route exact path="/" component={StockRoute}/>
      <Route path={`/stocks/:stockId`} component={StockContainer}/>
    </div>
  </Router>
  )
}
}

const mapStateToProps = (state) =>({
  stock: state.stocks.stock
})

export default connect(mapStateToProps,{})(FrontPageContainer);
