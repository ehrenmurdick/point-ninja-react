var ws = require("nodejs-websocket")
var _ = require("lodash")

var connections = _([])

var server = ws.createServer(function (conn) {
  connections = connections.concat(conn)

  conn.on("text", function (str) {
    console.log(str)
    console.log(connections.length)
    let action = JSON.parse(str)
    conn.id = action.id
    conn.partyId = action.partyId

    let members = _.filter(_.compact(connections), (c) => c.partyId === conn.partyId)
    if (_.size(members) === 1) {
      conn.send(JSON.stringify({type: 'NOBODY_HOME'}))
    } else {
      _.each(_.reject(members, (c) => c === conn), (c) => c.send(str))
    }
  })

  conn.on("close", function (code, reason) {
    connections = _.reject(_.compact(connections), (c) => c === conn)
    _.each(connections, (c) => c.send(JSON.stringify({type: 'LEAVE', id: conn.id})))
  })

  conn.on('error', () => {})
}).listen(8001)
