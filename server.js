var ws = require("nodejs-websocket")
var _ = require("lodash")

var connections = _([])

var server = ws.createServer(function (conn) {
  connections = connections.concat(conn)

  conn.on("text", function (str) {
    console.log(str)
    console.log(connections.size())
    conn.id = JSON.parse(str).id
    if (connections.size() === 1) {
      conn.send(JSON.stringify({type: 'NOBODY_HOME'}))
    } else {
      connections.reject(conn).each((c) => c.send(str))
    }
  })

  conn.on("close", function (code, reason) {
    connections = connections.reject(conn)
    connections.each((c) => c.send(JSON.stringify({type: 'LEAVE', id: conn.id})))
  })

  conn.on('error', () => {})
}).listen(8001)
