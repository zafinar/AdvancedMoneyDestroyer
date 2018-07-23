import {FETCH_STOCK, SEARCH} from './types'

export function fetchStock(symbols,types){
  return (dispatch)=> {
  types = types.split(",").map(
    type =>{
      if (type === "spread" || type === "spread-chart"){
        return "book"}
      else if (type === "chart-daily"){
        return "chart&range=1d"
      }
      else if (type === "chart-weekly"){
        return "chart&range=1m"
      }
      else if(type === "chart-quarterly"){
        return "chart&range=3m"
      }
      else if (type === "chart-biannually"){
        return "chart&range=6m"
      }
      else if (type === "chart-yearly"){
        return "chart&range=1y"
      }
      else if (type === "chart-5year"){
        return "chart&range=5y"
      }
      else if (type === "chart-2year"){
        return "chart&range=2y"
      }
      else{
        return type}
      }
    ).join(",")
    console.log(types)
  fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbols}&types=${types}`)
  .then(r => r.json())
  .then(data => dispatch({
    type: FETCH_STOCK,
    payload: data
  }))

  }
}

export function clearStock(){
  return (dispatch) =>{
    dispatch({
      type: FETCH_STOCK,
      payload: {}
    })
  }
}

export function search(searchString){
  console.log("searching")
  return (dispatch) => {
    dispatch({
      type: SEARCH,
      payload: searchString
    })
  }
}
