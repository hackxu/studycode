function getJSON(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.onload = function () {
    callback(this.responseText)
  }
  xhr.open('GET', url, true)
  xhr.send()
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)))
}
export function log1() {
  console.log("3123");
  
}
export function log2() {
  console.log("3123");
  
}