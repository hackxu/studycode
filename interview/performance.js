var lastTime = performance.now()
var frame = 0;
var lastFameTime = performance.now()
var loop = function (time) {
  var now = performance.now()
  var fs = (now - lastFameTime)
  var fps = Math.round(1000 / fs)
  frame++
  if (now > 1000 + lastTime) {
    var fps = Math.round((frame * 1000) / (now - lastTime))
    frame = 0
    lastTime = now
  }
  window.requestAnimationFrame(loop)
}