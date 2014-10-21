(function() {
  var http, io, server, socketIO;

  http = require("http");

  socketIO = require("socket.io");

  server = http.createServer(function(req, res) {}).listen(3333);

  io = socketIO.listen(server);

  console.log("start node");

  console.log(io);

  io.sockets.on("connection", function(socket) {
    console.log("connect!");
    socket.on("toAll", function(data) {
      io.sockets.emit("toClient", {
        value: data.value
      });
    });
    socket.on("toServerBroad", function(data) {
      socket.broadcast.emit("toClient", {
        value: data.value,
        device: data.device
      });
    });
    socket.on("disconnect", function() {});
  });

}).call(this);
