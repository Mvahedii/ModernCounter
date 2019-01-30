import {createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer/reducer'

// 3- create Store

// Define a composeEnhance for Redux Dev Tools

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
    applyMiddleware()
))

// 5-Listen to Changes

store.subscribe(()=>{
    console.log(store.getState())
})

// 6- Dispatching the Changes

// store.dispatch(ACT.increaseCounter())
// store.dispatch(ACT.decreastCounter())


export default store;