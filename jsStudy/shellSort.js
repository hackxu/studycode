function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2)

  for (let i = gap; i < len; i++) {
    const temp = arr[i]
    let preIndex = i - gap
    while (gap > 0) {
      // gap距离
      while (arr[preIndex] > temp) {
        arr[preIndex + gap] = arr[preIndex]
        preIndex -= gap
      }
      arr[preIndex + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
} 