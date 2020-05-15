// import '@babel/polyfill'
// import {chunk} from 'lodash'
import { chunk } from 'lodash-es'
import './base.css'
import "./base.scss"
const array = [1, 2, 3]
const isEs6 = () => console.log(...array);

isEs6()

const arr = [new Promise(() => { }), new Promise(() => { })]
arr.map(item => {
  console.log(item);
})
// console.log(_.join(arr, "***"));

import("./common/a").then((a) => console.log(a))
import("./common/b").then((b) => console.log(b))

console.log("chunk",chunk([1, 2, 3], 2));

// function getComponent() {
//   return import('lodash').then(({ default: _ }) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['hello', 'world'], '-')
//     return element
//   })
// }
// getComponent().then(element => {
//   document.body.appendChild(element)
// })