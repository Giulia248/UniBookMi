// Import the 'http' module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3306;

// Create a server instance using the http.createServer() method
const server = http.createServer((req, res) => {
  // Set the HTTP response header with status code 200 (OK) and Content-Type as text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write a response to the client
  res.end('Hello, World!\n');
});

// Start the server and listen for incoming requests on the specified port and hostname
server.listen(port, hostname, () => {
  // Once the server is started, log a message indicating that the server is running
  console.log(`Server running at http://${hostname}:${port}/`);
});