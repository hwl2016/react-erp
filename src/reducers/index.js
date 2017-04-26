import { combineReducers } from 'redux'
import Counter from './Counter'
import fetchData from './fetchData'

const huwl = combineReducers({
  Counter,
  fetchData
})

export default huwl;