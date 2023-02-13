// MODULE HTTP && NODEMON kutib xonasi
const http = require('http');

const server = http.createServer((request, response) => {
  // request - serverga so'rov yuborish
  // response - serverni so'rovimizga qaytargan javobi

  console.log(request.url);

  response.write("<h1>Hello World 1</h1>");
  response.write("<h1>Hello World 1</h1>");
  response.end();
});

server.listen(3000, () => {
  console.log("Server has been started on port: 3000");
});