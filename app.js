const http = require("http");

const express = require("express");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
    console.log("In the MiddleWare!");
    /* We have to tell that go to next middleware*/
    next(); /* Allows request object to continue to next middleware */
});

app.use((req, res, next) => {
    console.log("Another Middleware");
    res.setHeader("Connection", "keep-alive");
    res.send("<h1>HI From Express.js</h1>");
});

app.listen(PORT);
