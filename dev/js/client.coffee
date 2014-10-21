# node socket.io

s = io.connect ''

s.on "connect", -> # 接続時
  $("#data13 span.socketLog").text "socket.io Connect"

s.on "disconnect", (client) -> # 切断時
  $("#data13 span.socketLog").text "socket.io Disconnect"

s.on "toClient", (data) ->
  $("#data13 span.socketLog").text "socket.io toClient"
  $("#data14 span.toServer").text data.value
  return

s.on "toAll", (data) ->
  $("#data13 span.socketLog").text "socket.io toAll"
  $("#data14 span.toServer").text data.value
  return

sendBroadcast = ->
  $ ->
    $("#data13 span.socketLog").text "Broadcast call"
  s.emit "toServerBroad", #サーバへ送信
    value: 1
  return

$ ->
  # socket function
  $("a#voiceTest").click ->
    $("#data13 span.socketLog").text "Button Push"
    sendBroadcast();
