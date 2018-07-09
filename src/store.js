import { createStore, combineReducers, applyMiddleware } from 'redux'
import {  routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'


import itemsReducer from 'pages/Items/behaviours'


const reduxChromeExtesionConnection = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = {
    router: routerReducer,
    items: itemsReducer
}

const combinedReducers  = combineReducers(reducers)

//const store = createStore(combinedReducers, {}, reduxChromeExtesionConnection)

const store = applyMiddleware(thunkMiddleware)(createStore)(combinedReducers, {}, reduxChromeExtesionConnection)
export default store