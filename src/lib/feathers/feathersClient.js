import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

import { url } from './config'

export const socket = io(url, {
  transports: ['websocket']
})

const feathersClient = feathers()
  .configure(socketio(socket, { timeout: 30000 }))

export default feathersClient
