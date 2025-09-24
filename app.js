const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

/* importing files from local directory */
const adminRoute = require("./routes/admin.js");
const shopRoute = require("./routes/shop.js");

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
/* extended : true --> this will work for ** nested OBJECT and ARRAY ** */
/* extended : false ---> this will work for ** strings ** */

app.get("/message", (req, res, next) => {
    console.log("inside the /message path");
    console.log(req.url);
    res.send(`<h1> inside the path of ${req.url}</h1>`);
});

/* placing which one comes first after which one  , does really matter , so be careful when placing */
app.use("/admin", adminRoute);
app.use(shopRoute);

/* Page Not Found */

app.use((req, res, next) => {
    // res.status(404).send(`<h1>Page Not Found for ${req.url}</h1>`);
    res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT);
