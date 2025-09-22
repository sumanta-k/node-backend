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
});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
