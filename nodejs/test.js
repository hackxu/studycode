const http = require('http')
const fork = require('child_process').fork;



const server = http.createServer()

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('./fork_compute.js')
    compute.send('开启一个新的子进程')

    compute.on('message', sum => {
      res.end(`Sum is ${sum}`)
      compute.kill()
    })

    compute.on('close', (code, signal) => {
      console.log(`收到close事件，子进程收到信号${signal}而终止，退出码${code}`);
      compute.kill()
    })

    // console.info('计算开始', new Date())
    // const sum = longComputation()
    // console.info('计算结束', new Date())
    // return res.end(`Sum is ${sum}`)
  } else {
    res.end('ok')
  }
})

server.listen(3000)