// let array = [3, 1, 6, 5, 7, 2, 4]

// let pivot = array[array.length - 1]
// let left = array.filter((v, i) => v <= pivot && i != array.length - 1)
// let right = array.filter(v => v > pivot)

// let result = [...left, pivot, ...right]

// console.log(result);
const utils = {
  randomNum() {
    return Math.floor(Math.random() * 100)
  },
  randomArray() {
    return Array.from(Array(this.randomNum()), _ => this.randomNum())
  }
}

function quickSort(array: Array<any>): Array<any> {
  if (array.length < 2) return array
  let pivot = array[array.length - 1]
  let left = array.filter((v, i) => v <= pivot && i != array.length - 1)
  let right = array.filter(v => v > pivot)
  // console.log("应该第一次");

  return [...quickSort(left), pivot, ...quickSort(right)]

}
let array = utils.randomArray()
console.log(quickSort(array));

export default quickSort