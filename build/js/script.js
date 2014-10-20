(function() {
  $(function() {
    var count;
    window.addEventListener("devicemotion", (function(evt) {
      var a, b, bgColor, g, x, xg, y, yg, z, zg;
      x = evt.acceleration.x;
      y = evt.acceleration.y;
      z = evt.acceleration.z;
      xg = evt.accelerationIncludingGravity.x;
      yg = evt.accelerationIncludingGravity.y;
      zg = evt.accelerationIncludingGravity.z;
      a = evt.rotationRate.alpha;
      b = evt.rotationRate.beta;
      g = evt.rotationRate.gamma;
      $("#data1 span.num").text(g.toFixed(3));
      $("#data2 span.num").text(b.toFixed(3));
      $("#data3 span.num").text(a.toFixed(3));
      $("#data4 span.num").text(zg.toFixed(3));
      $("#data5 span.num").text(yg.toFixed(3));
      $("#data6 span.num").text(xg.toFixed(3));
      $("#data7 span.num").text(z.toFixed(3));
      $("#data8 span.num").text(y.toFixed(3));
      $("#data9 span.num").text(x.toFixed(3));
      $("p#point").css({
        top: "+=" + yg * -2 + "px",
        left: "+=" + xg * 2 + "px"
      });
      bgColor = $("#wrapper").data("color");
      $("#data11 span.color").text(bgColor);
    }), true);
    count = 0;
    $("#data10 span.num").text(count);
    return $(this).gShake(function() {
      var color;
      count++;
      $("#data10 span.num").text(count);
      color = count % 4;
      if (color === 0) {
        $("#wrapper").css({
          background: "#ff64af"
        });
        return $("#wrapper").data("color", "#ff64af");
      } else if (color === 1) {
        $("#wrapper").css({
          background: "#40c8fe"
        });
        return $("#wrapper").data("color", "#40c8fe");
      } else if (color === 2) {
        $("#wrapper").css({
          background: "#ff8d41"
        });
        return $("#wrapper").data("color", "#ff8d41");
      } else if (color === 3) {
        $("#wrapper").css({
          background: "#ffffff"
        });
        return $("#wrapper").data("color", "#ffffff");
      }
    });
  });

}).call(this);
