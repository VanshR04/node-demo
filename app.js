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
const server = http.createServer((req,res) =>{
if(req.url === '/')
{
    res.end("Welcome to Vansh's Home Page with NodeJS")
}
if(req.url === '/about')
{
    res.end("Vansh's About Page")
}
})

server.listen(5000)
//5000 is the port we will use