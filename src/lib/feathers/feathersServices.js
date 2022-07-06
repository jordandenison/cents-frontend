import reduxifyServices from 'feathers-redux'
import feathersClient from './feathersClient'

const services = [
  'Users'
]

export default reduxifyServices(feathersClient, services)
