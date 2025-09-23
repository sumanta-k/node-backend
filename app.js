const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
/* extended : true --> this will work for ** nested OBJECT and ARRAY ** */
/* extended : false ---> this will work for ** strings ** */

app.use("/add-product", (req, res, next) => {
    res.send(
        "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>ADD-PRODUCT</button></form>",
    );
});

app.post("/product", (req, res, next) => {
    console.log(req.body.title);
    res.redirect("/");
});

app.use("/message", (req, res, next) => {
    console.log("inside the /message path");
    console.log(req.url);
    res.send(`<h1> inside the path of ${req.url}</h1>`);
});

app.use("/", (req, res, next) => {
    console.log("In the homePage MiddleWare!");
    res.send("<h1>HOme Page</h1>");
});

app.listen(PORT);
