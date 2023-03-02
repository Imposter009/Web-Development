// The first step is to include the module with the help of the following code
const fs = require("fs");
//here fs in bracket means file system module.

// The next step is, we have to write the name of the file, which we want to read. The function readFileSync synchronously reads the entire contents of a file.
let text = fs.readFileSync("dele.txt", "utf-8");

//to replace any component of the file we use replace fn.
text = text.replace("browser", "Rohan");

// The writeFileSync() function is used to write the file. it creats new file if file with that name doest exist.
console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text);


// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("This is a message");
// syntax::
/* 
  readFile("file_name",encoding, (error, data) => {
  if (error) throw err;
  console.log(data);
  the last argument here is call back function
}); 
*/
{
    /*
    CREATING SERVER

    >>importing
    {
    const http = require('http');
    const fs = require('fs');
    }
    const fileContent = fs.readFileSync('filename.html')

    >>Syntax for creating server and serving the file:
    {
        const server = http.createServer((req, res) => {
        res.writeHead(200, {‘Content- type’ : ‘text / html’});
        res.end(fileContent)
    }   

     >>Syntax for making this server listen on its port.
     {
      server.listen(80, ‘127.0.0.1’, () => {
      console.log(“Listening on port 80”);
      });
    ->The reason for listening to the server at port 80 was, we do not have to explicitly write anything else in the    URL. For example, if we have taken 8000, then we have to explicitly write it on the URL to get the request back. 
    }


    */
}
{
    // CREATING A CUSTOM BACKEND SERVER 
    // importing modules 
    {
        const http = require('http');
        const fs = require('fs');
    }

    // creating host 
    {
        //we will make random localhost and port to listen 
        const hostname = '127.0.0.1';
        const port = 3000;
    }

    // reading html code from different files
    {
        const home = fs.readFileSync('index.html')
        const about = fs.readFileSync('./about.html')
        const services = fs.readFileSync('./services.html')
        const contact = fs.readFileSync('./contact.html')
    }

    // creating server 
    {
        // We will now create a server and gives it an arrow function 
        const server = http.createServer((req, res) => {
            console.log(req.url);
            url = req.url;

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            if (url == '/') {
                res.end(home);
            }
            else if (url == '/about') {
                res.end(about);
            }
            else if (url == '/services') {
                res.end(services);
            }
            else if (url == '/contact') {
                res.end(contact);
            }
            else {
                res.statusCode = 404;
                res.end("<h1>404 not found</h1>");
            }
        });
    }

    {
        // runnign the server i.e we will make the port to listen 
        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });

    }

    {
        // file name::mod.js
        // exporting functions and variables as modules. 
        console.log("We are exporting this module");
        function average(arr) {
            let sum = 0;
            arr.forEach(element => {
                sum += element;
            });
            return sum / arr.length;
        }
        module.exports = {
            avg: average,
            name: "Harry",
            repo: "GitHub"
            // this function 'module.exports' will export function or variable as module. it can be included in a js file. this function send the content as object.
        }
        module.exports.place = "lko";
        // name will be send as an Object 
    }



    {
        // file name:: indexedDB.js 
        // including a module in our js file 
        const mod = require("./mod");
        // requesting modules from ./mod js file. mod me pura ka pura object receive hoga mod.js file ka. tabhi hum mod.avg, mod.name kr ke use kr rahe hai 
        {
            console.log(mod.name)
            console.log(mod.avg([3, 4]))
            // when we send multiple things as an single object
        }
        console.log(place)
           // when we send only single content as an object
    }

    {
        // ABOUT NPM
       /* 
       :NPM helps us to manage the packages in NodeJs. 
       
       :To know the version of NPM and Node, we can write npm --version and node --version respectively on the terminal.
        as soon as we write npm init on the terminal, it asks several questions like the package name, version, description, entry point, keyword, author, etc. When we execute this, then there a new file gets created called package.json inside the folder directory
       
        :NPM init has initialized this folder in terms of a node package. Now when we install any other dependency, it automatically gets added to this package. For example, if we write npm install slugify, the package.json file will automatically get updated
       
       : node.modules is a folder containing all the modules related to our project. If by mistake this folder gets deleted, we can recover it back by again installing npm by writing npm install.
       
       :If we want to install any specific version of the dependency, we can easily do that. For example, if want to install version 1.3.5 of slugify, we have to write as npm install slugify@1.3.5.
       
       :Let us now see what dev dependencies are. There are times when we want to install the packages only for development purposes, not for production purposes. In that case, dev dependencies are useful. The best example of this is nodemon. It gives us the server which automatically gets restart every time. To install this, we have to write-> npm intall nodemon --save-dev

       :
       */
    }
}


/*
>> What is Node.Js?
Node.Js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
Node.Js is designed to build scalable network applications.
Node.Js can be download from the official Node.js website.
Node.Js is a free and open-source server environment.
Node.Js allows us to run JavaScript on the server.
Node.Js can run on multiple operating systems.

>>Why use Node.Js?
You can use JavaScript in the entire stack.
Many famous companies use Node.Js as their backend.
Node.Js comes with a lot of useful built-in modules.
Node.Js is fast.

>>REPL: Read Evaluate Print Loop. it is the node terminal that opens. 

>>The code which runs via line by line execution is known as synchronous or blocking code. It means the line of code written first, will be executed first. On the other hand, a block of code where line by line execution is not guaranteed is known as asynchronous or non-blocking code. 

>>NPM is basically a package manager for Node.Js packages or modules. The NPM program is installed on your computer when you install Node.Js.

>>
*/