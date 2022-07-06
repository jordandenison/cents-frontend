import React from 'react'
import { Provider as ReactReduxProvider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

const Provider = ({ children, store }) => {
  return (
    <ReactReduxProvider store={store}>
      <Router>
        {children}
      </Router>
    </ReactReduxProvider>
  )
}

export default Provider
