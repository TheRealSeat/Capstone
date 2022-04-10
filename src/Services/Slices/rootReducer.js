import {combineReducers} from 'redux'
import cart from './cart'
import events from './event';
const rootReducer=combineReducers({
   cart,
   events
})

export default rootReducer;