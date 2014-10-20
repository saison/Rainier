$ ->
  # Device Motion
  window.addEventListener "devicemotion", ((evt) ->

    #加速度
    x = evt.acceleration.x
    y = evt.acceleration.y
    z = evt.acceleration.z

    #傾き
    xg = evt.accelerationIncludingGravity.x
    yg = evt.accelerationIncludingGravity.y
    zg = evt.accelerationIncludingGravity.z

    #回転値
    # z方向
    a = evt.rotationRate.alpha
    # x方向
    b = evt.rotationRate.beta
    # y方向
    g = evt.rotationRate.gamma


    $("#data1 span.num").text(g.toFixed(3))
    $("#data2 span.num").text(b.toFixed(3))
    $("#data3 span.num").text(a.toFixed(3))
    $("#data4 span.num").text(zg.toFixed(3))
    $("#data5 span.num").text(yg.toFixed(3))
    $("#data6 span.num").text(xg.toFixed(3))
    $("#data7 span.num").text(z.toFixed(3))
    $("#data8 span.num").text(y.toFixed(3))
    $("#data9 span.num").text(x.toFixed(3))

    $("p#point").css
      top: "+=" + yg * -2 + "px"
      left: "+=" + xg * 2 + "px"

    bgColor = $("#wrapper").data("color")
    $("#data11 span.color").text(bgColor)

    # if Math.abs(xg) >= 8 or Math.abs(yg) <= 5
    #   $("#data12 span.flash").text("start")
    #   $("#wrapper").fadeOut 100, ->
    #     $(this).fadeIn 100
    #     return
    #   return
    # else
    #   $("#data12 span.flash").text("end")
    #   $("#wrapper").stop().fadeIn 100

    return

  ), true

  # Shake Motion
  count = 0
  $("#data10 span.num").text(count)
  $(@).gShake ->
    count++
    $("#data10 span.num").text(count)

    color = count % 4

    if color == 0
      $("#wrapper").css
        background : "#ff64af"
      $("#wrapper").data("color","#ff64af")
    else if color == 1
      $("#wrapper").css
        background : "#40c8fe"
      $("#wrapper").data("color","#40c8fe")
    else if color == 2
      $("#wrapper").css
        background : "#ff8d41"
      $("#wrapper").data("color","#ff8d41")
    else if color == 3
      $("#wrapper").css
        background : "#ffffff"
      $("#wrapper").data("color","#ffffff")

  # # Voice Audio
  # $("#voiceTest").click ->
  #   navigator.getUserMedia = (navigator.getUserMedia or navigator.webkitGetUserMedia or navigator.mozGetUserMedia or navigator.msGetUserMedia)
  #   if navigator.getUserMedia
  #     navigator.getUserMedia
  #       video: true
  #       audio: true
  #
  #     , ((localMediaStream) ->
  #       # successCallback
  #       video = document.querySelector("video")
  #       video.src = window.URL.createObjectURL(localMediaStream)
  #       return
  #
  #     ), (err) ->
  #       # errorCallback
  #       alert "The following error occured: " + err
  #       return
  #
  #   else
  #     alert "getUserMedia not supported"
