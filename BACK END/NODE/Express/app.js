/*Express helps us in surfing between different urls. this saves us from writing different if-else-if cases */
const express = require("express");
//IMPORTING EXPRESS MODULES
const app = express();
//STARTING AN APP
const port = 80;
// SETTING THE PORT TO 80
app.get("/", (req, res) => {
    // app.end is like res.url of http module i.e it will match our url and then will do the task accordingly.
    res.send("This is homepage of my first express app with Harry");
    // app.send is like res.end of http module i.e to show this on the content on the screen
});
app.get("/about", (req, res) => {
    res.status(200).send("This is about page of my first express app with Harry");
    // res.status(200).send(..) function is a combination of status and send i.e it will set the statuscode as well as print the conent
});

app.post("/about", (req, res) => {
    res.send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res) => {
    res.status(404).send("This page is not found on my website cwh");
    // app.status(404) is like  res.statusCode = 404; of http module i.e to tell the status of or request.
});

app.listen(port, () => {
    //for listening our server.
    console.log(`The application started successfully on port ${port}`);
});
