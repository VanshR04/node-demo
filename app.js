// const os = require('os')
const http = require('http')
// console.log(os.userInfo())

// console.log(os.uptime())

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     free: os.freemem()
// }

// console.log(currentOS)
//req => request we are getting 
//res => response we are sending

//1st approach - normal
// const server = http.createServer((req,res) => {
//     res.end('Wassup')
// })

//2nd approach - using event
const server = http.createServer()

server.on('request', (req,res) => {
    res.end('Wassup')
})

server.listen(5000)
//5000 is the port we will use