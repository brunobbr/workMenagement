const express = require("express")
const server = express()

// request, response
server.get('/', (request, response) => {
   
    return response.send('Hi Bruno')
})

server.listen(3000, () => console.log('Init'))