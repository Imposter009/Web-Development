/*
!EXPRESS.Js
>it is Nodejs framework 
>it is commonly used framework to create a server
>Express has few level of methods :
:Application methods : e.g. app.use()
:Request methods
:Response methods
:Middleware methods
:Router methods

>Response methods (res is our response objects)
:res.send() - for sending HTML
:res.sendFile() - for sending File
:res.json - for sending JSON
:res.sendStatus(404) - for sending HTTP status only

>Request properties (req is our request object)
:req.ip - IP address of client
:req.method - HTTP method of request
:req.hostname - like google.com / localhost
:req.query - for capturing query parameters from URL e.g. localhost:8080 ? query=value
:req.body -for capturing request body data (but its needs a middleware for body data decoding)
:req.params - for capturing URL parameters for route path like /products/:id

>Middle-ware : Modifies the request before it reaches the next middleware or endpoints.Sequence of middleware is very important, as first middleware is first traversed by request.Middle-wares can be used for many use cases, like loggers(eg: morgan), authentication, parsing data etc.
>Middleware functions can perform the following tasks:
: Execute any code,
: Make changes to the request and the response objects.
: End the req-res cycle
: Callthe next middleware in thstack.
>Middle-ware can be :
:Application level : server.use(middleware)
:Router level : server.get('/', middleware, (req,res)=>{})
:Built-in middleware : express.json() [ for parsing req body data, express khud se req ki body ka data nhi nikalta isliye we use this middleware taaki we can use req.body without error , isko use karne ke baad we req ki body json type wali ko padh lega], express.static()[for static hosting], express.urlencoded[we us this to parse data if we send data throung a form in which there is url-encoding]
:External Middle-wares - like morgan

*>Static Hosting : we can make 1 or more folders as static hosted using express.static middleware. server.use(express.static(< directory >)) Static hosting is like sharing a folder/directory and making its file readable as it is. Note : index.html is default file which would be read in a static hosted folder, if you don't mention any file name.

>3 major ways of sending data from client to server via request are :
:1. Send data via URL in Query String:: URL with ?name=Youstart&subject=express i.e key=value pair . req.query
:2. Send data via Request Params:: URL with /demo/:name/:subject  . req.params
:3. Send data via Request Body:: Use a HTML Form and make method value as POST. This will make all name=value pair to go via body of request.


{
const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const morgan = require('morgan');
// creating a server
const server = express();

//bodyParser
server.use(express.json());
server.use(express.urlencoded());
server.use(morgan('default'))
server.use(express.static('public'));

// creating a middleware
server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get('User-Agent')
  );
  next();
});

const auth = (req, res, next) => {
  console.log(req.query);

  if (req.body.password == '123') {
    next();
  } else {
    res.sendStatus(401);
  }
  next()
 
};

// API - Endpoint - Route
server.get('/product/:id', auth, (req, res) => {
  console.log(req.params)
  res.json({ type: 'GET' });
});
// server.Method('endpoint name'(: here means it is variable), middleware(if any) ,(req,res)=>{}) 
server.post('/', auth, (req, res) => {
  res.json({ type: 'POST' });
});
server.put('/', (req, res) => {
  res.json({ type: 'PUT' });
});
server.delete('/', (req, res) => {
  res.json({ type: 'DELETE' });
});
server.patch('/', (req, res) => {
  res.json({ type: 'PATCH' });
});

server.get('/demo', (req, res) => {
  res.sendStatus(404);
  res.json(products)
  res.status(201).send('<h1>hello</h1>')
  res.sendFile('/Users/abhishekrathore/Desktop/node-app/index.html')
});

server.listen(8080, () => {
  console.log('server started');
});
}



!REST API

>REST API is a standard for making APIs.
:We have to consider a resource which we want to access - like Product
:We access Product using combination of HTTP method and URL style

>REST API ( CRUD - Create , Read , Update, Delete) :
+CREATE
POST /products - create a new resource (product)

+READ
GET /products - read many resources (products)
GET /products/:id - read one specific resource (product)

+UPDATE
PUT /products/:id - update by replacing all content of specific resource (product).
PATCH /products/:id - update by only setting content from body of request and not replacing other parts of specific resource (product).

+DELETE
DELETE /products/:id - delete a specific resource (product).


*/