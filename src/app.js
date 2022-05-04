require('dotenv').config()

const Server = require('./infrastructure/server')

const server = new Server()

server.listen()
