/*"Site ka naam"*/

/* "FS_MODULE"
{
-> const fs = require('fs'); 

fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err, data)
});

-> const a = fs.readFileSync('file.txt')

 console.log(a.toString())

-> fs.writeFile('file2.txt', "This is a data", ()=>{
    console.log("Written to the file")
});

-> const b = fs.writeFileSync('file2.txt', "This is a data2")
console.log(b)
console.log("Finished reading file")
}
*/

/* "HTTP SERVER"
{ 
    const http = require('http');
    // importing the server module

    const port = process.env.PORT || 3000;
    // agar hum chahte hai ki hamara node applicaton kisi particular server pr chale to hum log is enviroment variable(PORT) ko set kr sakte hai, to store the port given to us. ya to wo process.env.PORT diye hue server pr chalega warna 3000 pr.  

    const server = http.createServer((req, res) => {
        console.log(req.url)
        //req.url will give us the url of our webpage. iski help se humlog different webpage me serve kr sakte hai apni website ke if-else-if ka use kr ke. eg:: if(req.url=='/help') then show help page. elseif(req.url=='/home') then show home page.url example:: localhost3000/home

        res.statusCode = 200;
        // when we send a req to a http server it sends us a response and a server code to tell us what happened with out request. example 200 mean that successfully done, 500 means server error , 404 server not found.

        res.setHeader('Content-Type', 'text/html')
        //this will help us to serve our request as html otherwise wo plane text me serve ho jayegi. ye batata hai ki kis tarha ka content server ne bheja hai.

        res.end('<h1> This is CodeWithHarry</h1> <p> Hey this is the way to rock the world!</p>');
        //ye cheez main screen pr receive hogi ya show hogi.
    })

    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
    //to listen a server. i.e to run it on the screen
}
*/

/*"CJS & EJS"

{
method to import in cjs:
    {
        const simple2 = require("./modulesecond.mjs");
    }

    // method to import in ejs:: 
    {
        import { simple2 as simple } from "./modulesecond.mjs"
        import { simple, simple2 } from "./modulesecond.mjs" yaha pr default nhi import karwa payenge, jin jin module ka naam likha hai bs wahi import ho payengi

        // to import default module:
        {
            // import simple223 from "./modulesecond.mjs"
            simple223();
            // mtlb ki hum parenthesis use nhi karenge 
        }
        // to import all functions 
        {
            import * as a2 from "./modulesecond.mjs"
            console.log(a2.simple())
        }
        simple();
    }

    // method to export ::
    {
        -> in cjs
        { module.exports = simple; }

        ->in mjs
        {
            export function simple() {
                console.log("Simple is Complex")
                return 45
            }
            export default function simple2() { console.log("Simple2 is Complex") }
        }

    }

}
}
*/

/* "EVENTS"
{
    const EventEmitter = require('events');

    class MyEmitter extends EventEmitter { }

    const myEmitter = new MyEmitter();

    myEmitter.on('WaterFull', () => {
        console.log('Please turn off the motor!');
        setTimeout(() => {
            console.log('Please turn off the motor! Its a gentle reminder');
        }, 3000);
    });

    console.log("The script is running")
    myEmitter.emit('WaterFull');
    console.log("The script is still running")
    myEmitter.emit('WaterFull');

}
*/
 /* "PATH MODULE"
{
    const path = require('path');

    const a1 = path.basename('C:\\temp\\myfile.html');
    const a2 = path.dirname('C:\\temp\\myfile.html');
    const a3 = path.extname(__filename)
    console.log(a1)
    //OUTPUT:: myfile.html
    console.log(a2)
    //OUTPUT:: C:\temp
    console.log(__filename, a3)
    //OUTPUT:: c:\Users\sumit\Downloads\New folder\node_notes.js .js
}
*/