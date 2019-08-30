// let arr = ["2015-2-8", "2015-3-3"]
// arr.map((item, index) => {
//   let timeString = ""
//   console.log(new Date(item).getTime());

// })

function getTrueTime(startTime, endTime) {
  let timeArr = []
  let sTime = new Date(startTime.replace(/-/g, '/')).getTime()
  let eTime = new Date(endTime.replace(/-/g, '/')).getTime()
  while (sTime <= eTime) {

    timeArr.push(new Date(sTime).toLocaleDateString().replace(/\//g, '-'))
    sTime += 86400000
  }
  // console.log(timeArr);
  // for (let i = 0; i < timeArr.length; i++) {
  //   timeArr[i] = new Date(timeArr[i]).toLocaleDateString().replace(/\//g, '-')
  // }
  console.log(timeArr);
  return timeArr
}
getTrueTime("2015-2-8", "2015-3-3")