const express = require('express')
const WebSocket = require('ws')
const path = require('path')
const redis = require('redis')
const _ = require('lodash')


const redisURL = process.env.REDIS_URL

const PORT = process.env.PORT || 3001
const INDEX = 'index.html'

const publisher = redis.createClient(redisURL)

const onRedisErr = (e) => {
  console.log(e)
}

publisher.on('error', onRedisErr)

const server = express()
  .use((req, res) => {
    console.log(req.originalUrl)
    return res.sendFile(req.originalUrl, { root: path.join(__dirname, 'build') })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const wss = new WebSocket.Server({ server })

const onRedisMessage = (conn) => (channel, msg) => {
  conn.send(msg)
}

const updateConnection = (conn, action) => {
  conn.id = action.id
  if (conn.partyId !== action.partyId) {
    conn.partyId = action.partyId
    if (!_.isNil(conn.redisClient)) {
      conn.redisClient.quit()
    }
    conn.redisClient = redis.createClient(redisURL)
    conn.redisClient.subscribe(conn.partyId)
    conn.redisClient.on('message', onRedisMessage(conn))
  }
}

wss.on('connection', function (conn) {
  conn.on("message", function (str) {
    let action = JSON.parse(str)
    updateConnection(conn, action)
    publisher.publish(conn.partyId, str)
  })

  conn.on("close", function (code, reason) {
    console.log(conn.id + ' left')
    conn.redisClient.quit()
    publisher.publish(conn.partyId, JSON.stringify({type: 'LEAVE', id: conn.id}))
  })

  conn.on('error', () => {})
})
