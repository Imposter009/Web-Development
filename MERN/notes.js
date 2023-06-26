/*
1. useEffect:: whenever we want to interact with outside world we use this
2. getInitalProps

>>A package in Node.js contains all the files you need for a module. Modules are JavaScript libraries you can include in your project.

                             #NEXT JS

> to create a Next Js app::
npx create-next-app

#>> 
1. useRouter from"next/router : If you want to access the router object inside any function component in your app, you can use the useRouter hook 

2.npm install semantic-ui-react semantic-ui-css
  import 'semantic-ui-css/semantic.min.css'      :: Semantic UI React is the official React integration for Semantic UI 

3. axios

-----------------------------------------------------------------------------------------------------------------------------


                             #NODE JS 

:Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client’s browse.Node.js allows you to run JavaScript on the server.
:It is used for creating server-side web applications
:Node js is built on google chrome V8 JavaScript engine hence its library is very fast in code execution
:Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model.
:Node.js runs single-threaded, non-blocking, asynchronous programming(Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.), which is very memory efficient.

>>What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database

>>Node.js files contain tasks that will be executed on certain events. A typical event is someone trying to access a port on the server


>>`PARTS OF NODE JS `

1. MODULES: Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application. we use  `requice()` function with parenthesis containing the name of the module which we want to include.eg:: var http = require('http');

:create your own module. Use the exports keyword to make properties and methods available outside the module file.

exports.myDateTime = function () {
  return Date();
};

1.1 #HTTP MODULE:
The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
Use the createServer() method to create an HTTP server:

var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
//The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.

:If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
})
//The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

:The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
This object has a property called "url" which holds the part of the url that comes after the domain name:  `res.write(req.url);`
http://localhost:8080/summer
Will produce this result:
/summer


1.2 #FILE SYSTEM MODULE:
The Node.js file system module allows you to work with the file system on your computer. var fs=require('fs')

>The fs.readFile() method is used to read files on your computer. 
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
//demofile1.html is a html file


>The File System module has methods for creating new files:
:fs.appendFile()
:fs.open()
:fs.writeFile()

:The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created

var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

:The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created

var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

:The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created

var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

>The File System module has methods for updating files:
:fs.appendFile()
:fs.writeFile()


:The fs.appendFile() method appends the specified content at the end of the specified file

var fs = require('fs');
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

:The fs.writeFile() method replaces the specified file and content

var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

>To delete a file with the File System module,: fs.unlink() method is used.

var fs = require('fs');
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

>To rename a file with the File System module,  use the fs.rename() method.:: fs.rename('myoldfile1.txt', 'mynewfile.txt', function (err) {}

1.3 #URL MODULE:
The URL module splits up a web address into readable parts.

:Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

1.4 #>>Events in Node.js
Every action on a computer is an event.Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

var events = require('events');
var eventEmitter = new events.EventEmitter();

:To fire an event, use the emit() method.
:You can assign event handlers to your own events with the EventEmitter object.

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

1.5 #Nodemailer Module
The Nodemailer module makes it easy to send emails from your computer. 

1.6 #Formidable Module
There is a very good module for working with file uploads, called "Formidable".

2. Console:  Console is a module that provides a way to debug similar to that of the JavaScript console provided by the internet browsers. It prints messages to stdout and stderr

3. Cluster:  Nodes is built upon the concept of single-threaded programming. A single instance of node runs on a single thread. Cluster is a module that allows multi-threading by creating child processes that share the same server port and run simultaneously

:adding cluster to an application 

var cluster = require('cluster');
if (cluster.isWorker) {
console.log(‘Child thread’);
}else {
console.log(’Parent thread’);
cluster.fork()
cluster.fork();
}

4. Global:   Global objects in Nodejs are available in all modules. These objects are functions, modules, strings, etc.eg require,exports..

5. Error Handling: Errors in Node.js are handled through exceptions. types of error:
:Standard JavaScript Error- syntax error,range error,reference error,type error,url error
:System Error- file does not exist error
:User-specific Error- error specified by user in code
:Assertion Error- error that occur in case of logic voilation  

6. Streaming: Streams are the objects that let you read data or write data continuously. There are four types of streams:
:Readable- These are the types of streams from which data can be read
:Writable- These are the types of streams to which data can be written
:Duplex- These are both readable and writable streams
:Transform- Streams that can manipulate the data while it is being read or written

7. Buffer: Buffer is a module that allows the handling of streams that contain only binary data. An empty buffer of length '10' can be created by this method:  var buf=Buffer.alloc(10);

8. Domain: they provide a way to handle different i/o operations as a single group. The domain module intercepts errors that remain unhandled. Two methods are used for intercepting these errors:
:Internal Binding: Error emitter executes its code inside the run method
:External Binding: Error emitter is explicitly added to a domain via its add method


9. DNS: DNS module is used to connect to a DNS server and perform name resolution by using the following method: dns.resolve().
DNS module is also used for performing name resolution without a network communication by using the following method: dns.lookup().

10. Debugger: Node.js includes a debugging utility that can be accessed by a built-in debugging client. Node.js debugger is not feature-packed but supports the simple inspection of code. The debugger can be used in the terminal by using the 'inspect' keyword before the name of the JavaScript file




-----------------------------------------------------------------------------------------------------------------------------------------------

                                                    #EXPRESS

>>Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications. It's a layer built on the top of the Node.js that helps manage a server and routes. Express.js makes it much easier and simpler to build a web server with the use of middleware, which can handle requests and responses

>Now look at some of the core features of the Express framework:
:Used for designing single-page, multi-page, and hybrid web applications
:Allows developers to set up middlewares for responding to HTTP Requests
:Defines a routing table that is used to perform different actions based on the HTTP method and URL
:Allows dynamic rendering of HTML Pages based on passing arguments to templates


var express = require('express');   //var express: Importing Express framework into our Node.js application
var app = express();

app.get('/’, function (req, res) {  
  res.send(‘Hello World’);
}
   app.get(): Callback function with parameters ‘request’ and ‘response’.
   The request object: It represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.
   The response object: It represents the HTTP response that an Express app sends when it gets an HTTP request.

var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port

consolelog("Example app listening at http://%s:%s", host, port)
})



*/