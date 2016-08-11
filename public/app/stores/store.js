import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import entriesReducer from '../reducers/entriesReducer'

// Combine Reducers
var reducers = combineReducers({
    entriesReducer: entriesReducer
})

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk) // Add middleware to createStore
)


export default store