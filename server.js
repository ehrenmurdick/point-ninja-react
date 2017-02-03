var ws = require("nodejs-websocket")
var _ = require("lodash")

var connections = _([])

var server = ws.createServer(function (conn) {
  connections = connections.concat(conn)

  conn.on("text", function (str) {
    console.log(str)
    console.log(connections.length)
    connections.reject(conn).each((c) => c.send(str))
  })

  conn.on("close", function (code, reason) {
    connections = connections.reject(connections)
  })
}).listen(8001)
