"use strict";
// "use strict"
var box = document.querySelectorAll(".box")

var observer = new IntersectionObser

ver(function (entries) {
  entries.forEach(function(item){
    if(item.isIntersecting){
      console.log(item.target.dataset.origin);
      
    }
  })  
})
// 图片懒加载
var box = document.querySelectorAll(".box");
var observer = new IntersectionObserver(function (entries) {
  // return console.log(`发生交叉行为,目标元素有${entries.length}个`);
  // console.log(entries);
  entries.forEach(function (item) {
    if (item.isIntersecting) {
      console.log(item.target.dataset.origin);
      item.target.src = item.target.dataset.origin;
      observer.unobserve(item.target);
    } // let tips = item.isIntersecting ? "进入了父元素的内部" : "离开了父元素的内部"
    // console.log(tips);

  });
});
// var box = document.querySelectorAll(".box");
// var observer = new IntersectionObserver(function entriies(entries) {
//   entries.forEach(function (item) {
//     if (item.isIntersecting) {

//     }
//   })
// })
box.forEach(function (item) {
  return observer.observe(item);
}); // 触底
// observer.observe(box)

new IntersectionObserver(function (entries) {
  // console.log(entries);
  var item = entries[0];

  if (item.isIntersecting) console.log("滚动到了底部,开始请求数据");
}).observe(document.querySelector(".reference")); // 吸顶

var nav = document.querySelector("nav");
var stick = document.querySelector(".stick");
stick.style.top = nav.offsetTop + "px";
new IntersectionObserver(function (entries) {
  var item = entries[0];
  var top = item.boundingClientRect.top; // 当参照元素的的top值小于0，也就是在视窗的顶部的时候，开始吸顶，否则移除吸顶

  if (top < 0) nav.classList.add("fixed"); else nav.classList.remove("fixed");
}).observe(stick); // 动画效果

var uli = document.querySelectorAll("ul li");
var observerAnimation = new IntersectionObserver(function (entries) {
  entries.forEach(function (item) {
    if (item.isIntersecting) {
      // console.log("有的啊");
      item.target.classList.add("show");
      observer.unobserve(item.target);
    }
  });
});
uli.forEach(function (item) {
  return observerAnimation.observe(item);
});