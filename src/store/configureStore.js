import {createStore, compose, applyMiddleware} from 'redux'

import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import logger from 'redux-logger'

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware
  ]


const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middlewares),
  applyMiddleware(logger)
 )
)

if(module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default
    store.replaceReducer(nextReducer)
  })
}
return store
}
