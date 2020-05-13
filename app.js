console.log("Application Started");

// body-parser
// express
// typescript

const http = require("http");
const customLogic = require("./customModule");

// const url = require('url');

const server = http.createServer(customLogic.handlerFunc);
// const server = http.createServer(customLogic.handlerOne);
// const server = http.createServer(customLogic.handlerTwo);
// const server = http.createServer(customLogic.handlerThree);

server.listen(3000);
