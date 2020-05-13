const url = require("url");
const fs = require("fs");

const handlerFunc = (request, response) => {
  const hitUrl = request.url;

  console.log("We got a request");

  let simpleHtmlFile = `<html><head></head><body><h1>This Is Html Changed</h1><p>${hitUrl}</p></body></html>`;

  response.writeHead(200, "Content-Type", "text/html");
  response.write(simpleHtmlFile);
  response.end();
};

function handlerOne(request, response) {
  console.log("Hit Url:", request.url);
  console.log("Http Method:", request.method);
  const dummyObject = { title: "Mr", name: "Ahmet" };
  response.writeHead(404, "Content-Type", "text/html"); // Note that 404 is an error status code, check it on Console
  // response.setHeader("Content-Type", "text/html");
  response.write("<html><head></head><body><h1>Hello Html</h1></body></html>");
  response.end();
}

const handlerTwo = (request, response) => {
  var urlQuery = url.parse(request.url, true).query;

  console.log(`urlQuery.username ${urlQuery.username}`);

  console.log("Hit Url:", request.url);
  console.log("Http Method:", request.method);
  const dummyObject = { title: "Mr", name: "Ahmet" };
  response.writeHead(200, "Content-Type", "text/html");
  // response.setHeader("Content-Type", "text/html");
  response.write(
    `<html><head></head><body><h1>Hello Html</h1><p>You hit ${request.url}</p></body></html>`
  );
  response.end();
};

const handlerThree = (request, response) => {
  const urlQuery = url.parse(request.url, true).query;

  const fileName = urlQuery.fileName || "NewFile.txt";
  const fileContent = urlQuery.fileContent || "Some file content";

  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);

      response.writeHead(403, "Content-Type", "text/html");
      response.write(
        `<html><head></head><body><h1>Error Occured</h1><p></p></body></html>`
      );
    }
    response.writeHead(201, "Content-Type", "text/html");
    response.write(
      `<html><head></head><body><h1>File created</h1><p></p></body></html>`
    );

    response.end();
  });
};

module.exports.handlerOne = handlerOne;
module.exports.handlerTwo = handlerTwo;
module.exports.handlerThree = handlerThree;
module.exports.handlerFunc = handlerFunc;
