// 用setTimeout 实现 setInterval,
// function setInterval_(fn, timer, args) {
//   setInterval_._timer_ && clearTimeout(setInterval_._timer_)
//   !setInterval_.clearTimeout_ &&
//     (setInterval_._timer_ = setTimeout(() => {
//       fn.call(this / args)
//       setInterval_(fn, timer, args)
//     }, timer))
// }

// setInterval_.clear = function () {
//   this.clearTimeout_ = true
//   clearTimeout(this._timer_)
// }

// setInterval_(console.log, 1000, "测试下")
// setTimeout(() => {
//   setInterval_.clear()
// }, 5000);

function foo(){
  console.log("执行foo");
  setTimeout(foo, 1000)
}
foo();
function goo(){
  console.log("执行goo");
}
setInterval(goo, 1000);