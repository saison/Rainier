http = require("http")
socketIO = require("socket.io")

server = http.createServer((req, res) ->
).listen(3333)

io = socketIO.listen(server)

console.log "start node"
console.log io

io.sockets.on "connection", (socket) ->
  console.log("connect!");

  # メッセージ送信（送信者にも送られる）
  socket.on "toAll", (data) ->
    io.sockets.emit "toClient",
      value: data.value
    return

  # ブロードキャスト（送信者以外の全員に送信）
  socket.on "toServerBroad", (data) ->
    socket.broadcast.emit "toClient",
      value: data.value,
      device: data.device
    return

  # 切断したときに送信
  socket.on "disconnect", ->
    # io.sockets.emit("S_to_C_message", {value:"user disconnected"});
  return
