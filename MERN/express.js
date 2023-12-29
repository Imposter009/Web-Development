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
POST /products - create a new resource (in product) . to create a new task object (data will go inside request body)

+READ
GET /products - read many resources (from products).  to read all
GET /products/:id - read one specific resource (from product).  to read a particular task which can be identified by unique id

+UPDATE
PUT /products/:id - update by replacing all content of specific resource (in product). to update a particular task which can be identified by unique id. Data to be updated will be sent in the request body. Document data will be generally totally replaced.
PATCH /products/:id - update by only setting content from body of request and not replacing other parts of specific resource (in product).to update a particular task which can be identified by unique id. Data to be updated will be sent in the request body. Only few fields will be replace which are sent in request body

+DELETE
DELETE /products/:id - delete a specific resource (in product). to delete a particular task which can be identified by unique id.

{
    // API - Endpoint - Route
// Products
// API ROOT , base URL, example - google.com/api/v2/

// C R U D
//Create POST /products    
server.post('/products', (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

// Read GET /products
server.get('/products', (req, res) => {
  res.json(products);
});

// Read GET /products/:id
server.get('/products/:id', (req, res) => {
  const id = +req.params.id;
  const product = products.find(p=>p.id===id)
  res.json(product);
});

// Update PUT /products/:id
server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  products.splice(productIndex,1,{...req.body, id:id})
  res.status(201).json();
});
// Update PATCH /products/:id
server.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  const product = products[productIndex];
  products.splice(productIndex,1,{...product,...req.body})
  res.status(201).json();
});
// Delete DELETE /products/:id
server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  const product = products[productIndex];
  products.splice(productIndex,1)
  res.status(201).json(product);
}); 
}

!MVC
>MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces (VIEW), data (MODEL), and controlling logic (CONTROLLER). It emphasizes a separation between the software's business logic and display.
:Model - Database Schema's and Business logics and rules View - Server Side Templates (or React front-end) Controller - functions attached to routes for modifying request and sending responses. It's a link between the Model and View.

>Router
:These are like mini-application on which you can make set of Routes independently.(eg: /proucts and /users)
:Routers can be attached to main Server App using server.use(router)
:routers can only be used with middleware
{
  // to create a router
  {
    const express = require('express');
    const router = express.Router();
  }
// making route endpoint and exporting
{
  router
  .post('/', productController.createProduct)
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

   exports.router = router;
// here we have imported the productController which is a controller file in which we have defined all the steps for get,post,delete methods for /product
}

// importing and using route in the index.js file
{
  // we will import the route and then use it
  const productRouter = require('./routes/product')
  const userRouter = require('./routes/user')
  // we can use route through a middleware only
  server.use('/products',productRouter.router);
  server.use('/users',userRouter.router);
}
}


>
*/