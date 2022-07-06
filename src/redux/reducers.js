import { combineReducers } from 'redux'

import services from '../lib/feathers/feathersServices'

const reducers = {
  Users: services.Users.reducer
}

export default combineReducers(reducers)
