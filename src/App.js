import React from 'react'

import Provider from './Provider'
import Routes from './Routes'

import store from './redux/store'

import './App.css'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
