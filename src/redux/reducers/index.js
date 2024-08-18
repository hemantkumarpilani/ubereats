import {combineReducers} from 'redux'
import cartReducer from './cartReducer'

let rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer