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




*/