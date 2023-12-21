/*
!Node.jS
https://github.com/coderdost/full-stack-dev-2023

:Node.Js is js run-time enviroment which enables us to run js on our OS. it is asynchronus and non-blocking i/o 
>Two type of Module Systems in node JS are - CommonJS module and ES Modules.
:- CommonJS Module
{
//lib.js
exports.sum = function(){}

//index.js
const module = require('./lib.js')
module.sum();
}

:- ES Module
{
//lib.js
export {sum}

//index.js
import {sum} from './lib.js'
}	

>package.json is a configuration file for node projects which has scripts, dependencies, devDependencies etc
:Dependency is an object that contains the library, which your project requires for production environments and functioning effectively,eg: express. 
:devDependencies are those packages in the package.json file that you need only for project development purposes. Example- Babel, nodemon.
to install a package as devdependency we write as "npm i nodemon --save-dev"
>nodemon is a package for running node server and track live changes without re-starting the server again.
>scripts inside package.json can be used like npm run <script-name> e.g npm run dev. Only for npm start you can avoid run.

>HTTP requests
Request object comprises of many properties, but important ones are :
:Type of Request : GET, POST, PUT, DELETE etc.
:Headers : Meta data sent by your browser like browser name, cookies, authentication information etc.
:Query Parameters (url?name=john) : This is used in GET requests to send data to server
:Route Params (url/john)
:Body data : This is used in POST and other requests to send data to server

>HTTP responses
Response object comprises of many properties, but important ones are :
:Headers : Meta data sent by your server back to client like server name, content size, last updated time etc.
:Response status code (200, 404, 403, 502)
:Response body : Actual data to be sent to client : HTML, JS, JSON, CSS, Image etc.

*req and res are written in HTTP format. we send res data in string format only so it is importnat to convert our json data into string before sending it. but we can display this string data in html or json type accordingly by giving "Content-type:application/json" so that when it is displayed on the browser it is shown as json

>We can use Server to do 3 things:
1:Static file Hosting : Sending normal files without formatting or modifying.
eg:: jb hum HTML file bhej rahe ho server se
2:Server Side Rendering : Mixing data with templates and rendering dynamic views (dynamic web pages)
eg:: jb hum html file bhej rahe ho pr jo data show ho raha hai usme wo hum kisi aur json file se la rahe hai dynamically
3:Web APIs : Sending data via some APIs/ endpoints.
eg:: har end point ke liye alag data send karna

*Every Request has one and only one response. If there is more than 1 response which you want to send - you will encounter a error - "Headers already sent"
*POSTMAN is a software for doing complex API requests

>eg::
{
   const http = require('http');
   const fs = require('fs');

 const index = fs.readFileSync('index.html', 'utf-8');
 const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
 const products = data.products;

{
    //dynamic rendering/server side rendering: using data from our json file(product) in the HTML file (index)
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]
    //req.url.split('/') will return an array=["","product","id:1"] /product/1
    const product = products.find(p=>p.id===(+id))
    console.log(product)
    res.setHeader('Content-Type', 'text/html');
          let modifiedIndex = index.replace('**title**', product.title)
          .replace('**url**', product.thumbnail)
          .replace('**price**', product.price)
          .replace('**rating**', product.rating)
          res.end(modifiedIndex);
          return;
  }
// for general /product:

  '/product':
      res.setHeader('Content-Type', 'text/html');
      let modifiedIndex = index.replace('**title**', product.title)
      .replace('**url**', product.thumbnail)
      .replace('**price**', product.price)
      .replace('**rating**', product.rating)
      res.end(modifiedIndex);
      break;
}

{
    //web API: differnet data for different endpoints 
  switch (req.url) {
    case '/':
      res.setHeader('Content-Type', 'text/html');
      res.end(index);
      break;
    case '/api':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404);
      res.end();
  }

  console.log('server started  ');
  //   res.setHeader('Dummy', 'DummyValue');

  //
}
});
server.listen(8080);
 
}


*/