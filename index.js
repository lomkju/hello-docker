require('marko/node-require')
const express = require('express')
const markoExpress = require('marko/express')
const axios = require('axios')

const app = express()
const index = require('./templates/index.marko')

app.use('/public', express.static('public'))

app.use(async (req, res) => {
  let ip = await axios("http://ip.tyk.nu/")
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.marko(index, {ip: ip.data, hostname: process.env.HOSTNAME})
})

httpServer = require('http').createServer(app)

httpServer.listen(process.env.PORT || process.argv[2] || 80, () => {})

module.exports = httpServer
