'use strict'

const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

let root = path.resolve(process.argv[2] || '.')

console.log('Static root dir:'+root)

let server = http.createServer(function (request,response) {
  let pathname = url.parse(request.url).pathname
  let filepath = path.join(root,pathname)
  console.log(filepath)
  fs.stat(filepath,function (err,stats) {
    if(!err&&stats.isFile()){
      console.log('200'+request.url)
      response.writeHead(200)
      fs.createReadStream(filepath).pipe(response)
    }else {
      console.log('404'+request.url)
      response.writeHead(404)
      response.end('404 Not Found')
    }
  })
})

server.listen(8080)

console.log('Server is running at http://127.0.0.1:8080/')