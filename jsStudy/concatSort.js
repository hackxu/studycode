function concatSort(arr) {
  const len = arr.length

  if (len < 2) { return arr }

  // if (len < 2) { return arr }
  const mid = Math.floor(len / 2)
  // const mid = Math.floor(len / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  // return [...concatSort(left), ...concatSort(right)]
  return concat(concatSort(left), concatSort(right))
}
function concat(left, right) {
  const result = []
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }

  return result.concat(left, right)
}
