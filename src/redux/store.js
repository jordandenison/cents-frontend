import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      promiseMiddleware,
      sagaMiddleware,
      thunk
    )
  )
)

sagaMiddleware.run(rootSaga)

export default store
