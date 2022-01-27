const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
    console.log(process.pid)
})

server.listen(port, hostname, () => {
    console.log('server start')
})

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('server end')
    })
})