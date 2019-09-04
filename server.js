const http = require('http');

const server = http.createServer((request, response) => {

    response.end('First responese');

});

server.listen(4201);
