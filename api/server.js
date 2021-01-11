// write the server here and export it
const express = require('express') // CommonJS
// import express from 'express'
const Dog = require('./dog-model')
const server = express() // instantiates an express app

server.use(express.json()) // configures the app to read the body of requests

// build a simple endpoint
// [GET] /
server.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

server.get('/api/dogs', (req, res) => {
  // 1- pull info from request (and validate it)
  Dog.findAll()
  // 2- interact with the database
  .then(dogs => {
    // 3- send the client appropriate response
    res.status(200).json(dogs)
  })
  .catch(error => {
    res.status(500).json({ message: error.message })
  })
})

server.get('/api/dogs/:id', (req, res) => {
  // 1- pull info from request
  const id 

})

server.post('/api/dogs', (req, res) => {

})

server.put('/api/dogs/:id', (req, res) => {

})

server.delete('/api/dogs/:id', (req, res) => {

})

// export this server so index.js can get it
module.exports = server  // CommonJS syntax
// export default server // ES6 native modules syntax
