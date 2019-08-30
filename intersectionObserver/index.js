// 图片懒加载
let box = document.querySelectorAll(".box")
let observer = new IntersectionObserver(entries => {
  // return console.log(`发生交叉行为,目标元素有${entries.length}个`);
  // console.log(entries);

  entries.forEach(item => {
    if (item.isIntersecting) {
      console.log(item.target.dataset.origin);
      item.target.src = item.target.dataset.origin
      observer.unobserve(item.target)
    }
    // let tips = item.isIntersecting ? "进入了父元素的内部" : "离开了父元素的内部"
    // console.log(tips);

  })
})

box.forEach(item => observer.observe(item))


// 触底
// observer.observe(box)

new IntersectionObserver(entries => {
  // console.log(entries);
  let item = entries[0]
  if (item.isIntersecting) console.log("滚动到了底部,开始请求数据");

}).observe(document.querySelector(".reference"))


// 吸顶
let nav = document.querySelector("nav")
let stick = document.querySelector(".stick")
stick.style.top = nav.offsetTop + "px"

new IntersectionObserver(entries => {
  let item = entries[0]
  let top = item.boundingClientRect.top;
  // 当参照元素的的top值小于0，也就是在视窗的顶部的时候，开始吸顶，否则移除吸顶
  if (top < 0) nav.classList.add("fixed")
  else nav.classList.remove("fixed")
}).observe(stick)

// 动画效果
let uli = document.querySelectorAll("ul li")
let observerAnimation = new IntersectionObserver(entries => {

  entries.forEach(item => {
    if (item.isIntersecting) {
      // console.log("有的啊");

      item.target.classList.add("show")
      observer.unobserve(item.target)
    }
  })
})
uli.forEach(item => observerAnimation.observe(item))