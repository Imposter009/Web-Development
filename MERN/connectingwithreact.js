/*
! 
>Sending data from front-end to Server:
:Fetch : it is in-built API in the browser
:Axios : we will use axios as it is easier to use.

>CORS - Cross-Origin Resource Sharing (CORS) is a standard that allows a server to relax the same-origin policy.We will use CORS package to allow cross origin request from React JS server to NodeJS server as they are on different hosts. we install cors: npm install cors
The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Browsers use CORS in APIs such as fetch() or XMLHttpRequest to mitigate the risks of cross-origin HTTP requests.
to use cors -
{
const cors = require('cors');
server.use(cors()) //using it as a middleware.
}

>Build a React Project :
:Run npm run build
:use build folder to be hosted on public hosting/static hosting.you can use build folder of react and add it to static hosting of express. server.use(express.static('build'));


*/ 