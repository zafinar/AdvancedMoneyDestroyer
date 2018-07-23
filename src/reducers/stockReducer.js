import { FETCH_STOCK, SEARCH} from '../actions/types.js'

const initialState = {
stocks: [],
stock: null,
search: ""
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_STOCK:
      return {
        ...state,
        stock: action.payload
      }
    case SEARCH:
      console.log("searchReducer")
      return{
        ...state,
        search: action.payload
      }

  default:
    return state;
  }
}
