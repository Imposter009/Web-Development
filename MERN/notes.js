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

>>Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications. It's a layer built on the top of the Node.js that helps manage a server and routes. Express.js makes it much easier and simpler to build a web server with the use of middleware(A request handler with access to the application's request-response cycle is known as middleware), which can handle requests and responses

>Now look at some of the core features of the Express framework:
:Used for designing single-page, multi-page, and hybrid web applications
:Allows developers to set up middlewares for responding to HTTP Requests
:Defines a routing table that is used to perform different actions based on the HTTP method and URL
:Allows dynamic rendering of HTML Pages based on passing arguments to templates
:Express is the most popular minimalistic framework. It is built upon the built-in module HTTP of NodeJS to facilitate the simple and easy interaction between frontend and backend logic through API

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

:create an app by calling the express() function provided by the express framework
:Routes are the endpoints of the server, which are configured on our backend server and whenever someone tries to access those endpoints they respond accordingly to their definition at the backend.::   app.anyMethod(path, function)
:The req is a giant object which will be received from the user and res is an object which will be sent to the user after the function finishes execution.

:Routes are the endpoints of the server, which are configured on our backend server and whenever someone tries to access those endpoints they respond accordingly to their definition at the backend. We can create routes for HTTP methods like get, post, put, and so on. 
:GET requests are used to send only limited amount of data because data is sent into header :: app.get(path, function).
app.get() function tells the server what to do when getting requests at a given route.
  Browser search bar can only send get requests to receive resources from the server.eg localhost3000/home
:POST requests are used to send large amount of data because data is sent in the body.
:listen() function is used to bind and listen to the connections on the specified host and port.::                          app.listen(PORT, call_back_functuion()={}). listen() function, It requires path and callback as an argument.The callback function gets executed either on the successful start of the server or due to an error.
:The req is a giant object which will be received from the user and res is an object which will be sent to the user after the function finishes execution.
:status() method it takes an HTTP status code as an argument and when the response is returned, the status will be sent along.
:The send() method takes a string, object, array, or buffer as an argument and is used to send the data object back to the client as an HTTP response, also there are lots of types of response in express like res.json() which is used to send JSON object, res.sendFile() which is used to send a file, etc.
:The set() function is used to set HTTP header’s content type as HTML. When the browser receives this response it will be interpreted as HTML instead of plain text.
:The express.json() middleware is used to parses the incoming request object as a JSON object. The app.use() is the syntax to use any middleware.const {name}, which is the syntax in ES6 to extract the given property/es from the object. Here we are extracting the name property which was sent by the user with this request object::app.use(express.json());

#SENDING DATA TO SERVER::
:The express.json() middleware is used to parses the incoming request object as a JSON object. The app.use() is the syntax to use any middleware. yaha mtlb user data bhejta hai Eg login id and password.
:const {name}, which is the syntax in ES6 to extract the given property/es from the object. Here we are extracting the name property which was sent by the user with this request object.
:humlog data bhejte hai json object ke form me along with path.  We are Accessing the route with Postman
:eg::
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/', (req, res)=>{
	const {name} = req.body;
	
	res.send(`Welcome ${name}`);
})

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and
					App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);


#Sending Files from Server
:there are majorly two methods to send files one is sending static files using middleware and the other one is sending a single file on a route.

1.sending file as static file
:express.static(), it accepts two arguments first one is the absolute root path of the directory(folder) whose files we are going to serve. eg: app.use(path, express.static(root, [options]));
:he join() method takes two parameters and joins them as a path. we  need to request the path module first to use this function
: __dirname which contains the path of the directory in which the current file exists.

:eg::
const express = require('express');
  
const app = express();
const PORT = 3000;
  
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'Static Files')))
//we want to serve content of Static Files folder thats why we are adding it in the end of the current directory(main folder) name 
:localhost:3000/static/file_name

2. sending file as route
:sendFile() function accepts an absolute URL of the file and whenever the route path is being accessed the server provides the file as an HTTP response. eg::res.sendFile(fileUrl)



#FUNCTIONS
>for all The options parameter contains various properties like inflate, limit, type, etc. 

:The express.raw() function parses incoming request payloads into a Buffer and is based on body-parser.
eg:: express.raw( [options] ).  ‘content-type’ – ‘application/octet-stream’ 

:The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. eg:: express.Router( [options] )

:The express.text() function is a built-in middleware function in Express. It parses the incoming request payloads into a string and is based on body-parser.eg:: express.text( [options] )  ‘content-type: text/plain’ 


:You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.
a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());
b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

:The express.urlencoded() function parses incoming requests with URL-encoded payloads and is based on a body parser
.eg::express.urlencoded( [options] )     ‘content-type: application/x-www-form-urlencoded’ 
The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).true precises that the req. body object will contain values of any type instead of just strings. The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
eg:
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: false }));
app.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});

:body-parser (it is an NPM package) to do the same thing. It is developed by the same peeps who built express and is designed to work with express. body-parser used to be part of express. Think of body-parser specifically for POST Requests (i.e. the .post request object) and/or PUT Requests (i.e. the .put request object).
code::
In body-parser you can do
//calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');
//parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
//combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));

#APPLICATIONS
:The app.locals object has properties that are local variables within the application. These variables are local to the application and are very useful. it is like storing a value in a variable.eg:: app.locals.email = 'demo@gmail.com'

:The app.mountpath property contains one or more path patterns on which a sub-app was mounted.
eg::on going  http://localhost:3000/user output: /user
const express = require('express');
const app = express(); // the main app
const user = express(); // the sub app
const PORT = 3000;

user.get('/', function (req, res) {
	console.log(user.mountpath); // /user
	res.send('User Homepage');
});

app.use('/user', user); // Mounting the sub app

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

:The mount event is fired on a sub-app when it is mounted on a parent app and the parent app is basically passed to the callback function. eg:: app.on('mount', callback(parent))

const express = require('express');
const app = express(); // The main app
const admin = express();
const PORT = 3000;

admin.on('mount', function (parent) {
	console.log('Admin Mounted');
});

admin.get('/', function (req, res) {
	res.send('Admin Homepage');
});
//Mounting the subapp over our main app
app.use('/admin', admin);

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
Console Output:::
Admin Mounted
Server listening on PORT 3000

>on http://localhost:3000/admin, now you can see the following output on your screen:
Admin Homepage

eg:: 
const express = require('express');
const app = express(); // The main app
const student = express();
const teacher = express();
const PORT = 3000;

//Multiple mounting
teacher.on('mount', function (parent) {
	console.log('Teacher Mounted');
});

student.on('mount', function (parent) {
	console.log('Student Mounted');
});

//Mounting the subapp over our main app
app.use('/student', student);
app.use('/teacher', teacher);

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
Console Output::: 
Student Mounted
Teacher Mounted
Server listening on PORT 3000

:The app.all() function is used to route all types of HTTP requests. Like if we have POST, GET, PUT, DELETE, etc, requests made to any specific route, let’s say /user, so instead of defining different APIs like app.post(‘/user’), app.get(‘/user’), etc, we can define single API app.all(‘/user’) which will accept all type of HTTP request. ::app.all( path, callback )

:The app.delete() function is used to route the HTTP DELETE requests to the path which is specified as a parameter with the callback functions being passed as a parameter.

:The app.disable() function is used to set the boolean setting name to false. It is basically the shorthand for the app.set(name, false). So instead we can use app.disable(name) function to set the false boolean value to some system Express.js settings. app.disable(name)

:The app.disabled() function is used to return the bool values of the setting name. It returns true if the setting name is disabled and returns false if the setting name is not disabled.:: app.disabled(name)

:The app.enable() function is used to set the boolean value i.e. name to true. It is basically the shorthand for the app.set(name, true) or app.set(name, false). So instead we can use app.enable(name) function to set boolean values to some system Express.js settings.


#REQUEST FUNCTION
:The req.app property holds the reference to the instance of the Express application that is using the middleware. 

:The req.baseUrl property is the URL path on which a router instance was mounted. The req.baseUrl property is similar to the mount path property of the app object, except app.mountpath returns the matched path pattern(s). 
const express = require('express');
const app = express();
const PORT = 3000;

const user = express.Router();

user.get('/login', function (req, res) {
	console.log(req.baseUrl);
	res.end();
})

app.use('/user', user);

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
Browser Output: 
http://localhost:3000/user/login, now you can see the following output on your console:

Server listening on PORT 3000
/user

:The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json(). 

:The req.cookies property is used when the user is using cookie-parser middleware. This property is an object that contains cookies sent by the request.
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(cookieParser());

app.get('/', function (req, res) {
	req.cookies.title = 'GeeksforGeeks';
	console.log(req.cookies);
	res.send();
});

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
 output on your console:

Server listening on PORT 3000
[Object: null prototype] { title: 'GeeksforGeeks' }

:The req.fresh property returns true if the response is still ‘fresh’ in the client’s cache else it will return false

:The req.accepts() function checks if the specified content types are acceptable on the basis of the requests Accept HTTP header field. The method returns the best match, else it returns false if none of the specified content types is acceptable. 
::req.accepts( types )
eg::
app.get('/', function (req, res) {
    console.log(req.get('Accept'));
    console.log(req.accepts('application/json'));
    res.end();
    //here it accepts application/json type
on http://localhost:3000/ with the header set to ‘ Accept: application/json’, then you will see the following output on your console:

Server listening on PORT 3000
application/json
application/json

eg::
app.get('/', function (req, res) {
    console.log(req.get('Accept'));
    console.log(req.accepts('text/plain'));
    res.end();
});
//here it accept text
on http://localhost:3000/ with the header set to ‘ Accept: application/json’, then you will see the following output on your console:Output:

Server listening on PORT 3000
application/json
false

:The req.acceptsCharsets() function returns the first accepted charset of the specified character sets on the basis of the request’s Accept-Charset HTTP header field otherwise it returns false if none of the specified charsets is accepted.
:: req.acceptsCharsets(charset [, ...])
eg:
app.get('/', function (req, res) {
    console.log(req.get('Accept-Charset'));
    console.log(req.acceptsCharsets('UTF-8'));
    res.end();
});
http://localhost:3000/ with the header set to ‘ Accept-Charset: UTF-8’, then you will see the following output on your console:
UTF-8
UTF-8

:The req.acceptsEncodings() function returns the first accepted encoding of the specified encodings on the basis of the request Accept-Encoding HTTP header field and it returns false if none of the specified encodings is accepted.encoding mtlb kis zip hai ya kis tarha ki encoded file
::req.acceptsEncodings(encoding [, ...])
app.get('/', function (req, res) {
    console.log(req.get('Accept-Encoding'));
    console.log(req.acceptsEncodings('gzip'));
    res.end();
});
GET request to http://localhost:3000/ with the header set to ‘Accept-Encoding: gzip’, then you will see the following output on your console:
Server listening on PORT 3000
gzip
gzip

#RESPONSE PROPERTIES
:The res.app property holds a reference to the instance of the Express application that is using the middleware. 
app.get('/', function (req, res) {
    console.log(res.app.get('views'));
    res.end();
});
 http://localhost:3000/, now you can see the following output on your console:
C:\Users\Lenovo\Downloads\Geeksforgeeks Internship\NEW\Express\views

:The res.headersSent property is a boolean property that indicates if the app sent HTTP headers for the response.

app.get('/', function (req, res) {
 
    //Before res.send()
    console.log(res.headersSent);
    res.send('OK');
});
 http://localhost:3000/, now you can see the following output on your console:
Server listening on PORT 3000
false

app.get('/', function (req, res) {
    res.send('OK');
 
    //After res.send()
    console.log(res.headersSent);
});
 http://localhost:3000, now you can see the following output on your console:
Server listening on PORT 3000
true


:The res.locals property is an object that contains response local variables scoped to the request and because of this, it is only available to the view(s) rendered during that request/response cycle (if any). 
app.get('/', function (req, res) {
 
    // Sending multiples locals
    res.locals.name = 'Gourav';
    res.locals.age = 13;
    res.locals.gender = 'Male'
 
    console.log(res.locals);
    res.end();
});
 Server listening on PORT 3000
[Object: null prototype] { name: 'Gourav', age: 13, gender: 'Male' }

:The res.append() function appends the specified value to the HTTP response header field and if the header is not already set then it creates the header with the specified value.:: res.append(field, [ value])
Parameter: The field parameter describes the name of the field that need to be appended and the value parameter can be a string or an array.

:The res.attachment() function is used to set the HTTP response Content-Disposition header field to ‘attachment’. If the name of the file is given as a filename, then it sets the Content-Type based on the extension name through the res.type() function and finally sets the Content-Disposition ‘filename = ‘ parameter.
app.get('/', function (req, res) {
    res.attachment('Hello.txt');
    console.log(res.get('Content-Disposition'));
});
OUTPUT::attachment; filename="Hello.txt"

:The res.download() function transfers the file at the path as an ‘attachment’. Typically, browsers will prompt the user to download:: res.download(path [, filename] [, options] [, fn])
res.download('Hello.txt');

:The res.end() function is used to end the response process. This method actually comes from the Node core, specifically the response.end() method of HTTP.ServerResponse. Use to quickly end the response without any data::res.end([data] [, encoding])

:The router.all() function is just like the router.METHOD() methods, except that it matches all HTTP methods (verbs). It is very helpful for mapping global logic for arbitrary matches or specific path prefixes.
::router.all(path, [callback, ...] callback)
// Setting multiple routes
router.all('/user', function (req, res) {
    console.log("User Page Called");
    res.end();
});
 
router.all('/student', function (req, res) {
    console.log("Student Page Called");
    res.end();
});
 
router.all('/teacher', function (req, res) {
    console.log("Teacher Page Called");
    res.end();
});
 
app.use(router);
output:: User Page Called 
Student Page Called 
Teacher Page Called    


:The router.METHOD() method provides the routing functionality in Express, where METHOD is one of the HTTP methods, such as GET, PUT, POST, and so on, in lowercase.::router.METHOD(path, [callback, ...] callback)
// Multiple routes
router.get('/user', function (req, res, next) {
    console.log("GET request called");
    res.end();
});
 
router.post('/user', function (req, res, next) {
    console.log("POST request called");
    res.end();
});
 
router.delete('/user', function (req, res, next) {
    console.log("DELETE request called");
    res.end();
})
 
app.use(router);
output::
GET request called
POST request called
DELETE request called

:The parameters of router.param() are a name and function. Where the name is the actual name of the parameter and the function is the callback function. Basically, the router.param() function triggers the callback function whenever the user routes to the parameter. This callback function will be called only a single time in the request-response cycle, even if the user routes to the parameter multiple times.::router.param(name, function)
router.param("userId", (req, res, next, id) => {
    console.log("This function will be called first");
    next();
});
 
router.get("/user/:userId", (req, res) => {
    console.log("Then this function will be called");
    res.end();
});
http://localhost:8000/user/343


:The router.route() function returns an instance of a single route that you can then use to handle HTTP verbs with optional middleware. You can also use the router.route() function to avoid duplicate route naming as well as typing errors.
// Multiple routing
router.route('/user')
    .get(function (req, res, next) {
        console.log("GET request called");
        res.end();
    })
    .post(function (req, res, next) {
        console.log("POST request called");
        res.end();
    })
    .put(function (req, res, next) {
        console.log("PUT request called");
        res.end();
    });
 
app.use(router);
 Now make GET, POST, and PUT requests to http://localhost:3000/, you can see the following output on your screen:

Server listening on PORT 3000
GET request called
POST request called
PUT request called


:The router.use() function uses the specified middleware function or functions. It basically mounts middleware for the routes which are being served by the specific router::router.use( path, function )
Parameters:
Path: It is the path to this middleware, if we can have /user, now this middleware is called for all API’s having /user of this router.
function: This function is passed as a callback, it is called when the specified path is called in this router.

// All requests to this router will
// first hit this middleware
router.use(function (req, res, next) {
    console.log("Middleware Called");
    next();
})
 
// Always invoked
router.use(function (req, res, next) {
    res.send("Greetings from GeeksforGeeks");
})
 
app.use('/user', router);
http://localhost:3000/user, you can see the following output on your screen:
Server listening on PORT 3000
Middleware Called
And you will see the following output on your browser:
Greetings from GeeksforGeeks
*/