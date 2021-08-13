import { bgReducer } from './reducer'
import {combineReducers} from 'redux'


let rootReducer=combineReducers({
    bgStore:bgReducer
})



export default rootReducer