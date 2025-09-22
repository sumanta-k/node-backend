const http = require("http");

const express = require("express");

const PORT = 3000;

const app = express();

app.use("/add-product", (req, res, next) => {
    console.log("Another Middleware");
    console.log(req.url);
    res.setHeader("Connection", "keep-alive");
    res.send("<h1>HI From Express.js</h1>");
});

app.use("/message", (req, res, next) => {
    console.log("inside the /message path");
    console.log(req.url);
    res.send(` inside the path of ${req.url}`);
});

app.use("/", (req, res, next) => {
    console.log("In the MiddleWare!");
    res.send("<h1>HOme Page</h1>");
});

app.listen(PORT);
