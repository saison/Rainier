(function() {
  var s, sendBroadcast;

  s = io.connect('');

  s.on("connect", function() {
    return $("#data13 span.socketLog").text("socket.io Connect");
  });

  s.on("disconnect", function(client) {
    return $("#data13 span.socketLog").text("socket.io Disconnect");
  });

  s.on("toClient", function(data) {
    $("#data13 span.socketLog").text("socket.io toClient");
    $("#data14 span.toServer").text(data.value);
  });

  s.on("toAll", function(data) {
    $("#data13 span.socketLog").text("socket.io toAll");
    $("#data14 span.toServer").text(data.value);
  });

  sendBroadcast = function() {
    $(function() {
      return $("#data13 span.socketLog").text("Broadcast call");
    });
    s.emit("toServerBroad", {
      value: 1
    });
  };

  $(function() {
    return $("a#voiceTest").click(function() {
      $("#data13 span.socketLog").text("Button Push");
      return sendBroadcast();
    });
  });

}).call(this);
