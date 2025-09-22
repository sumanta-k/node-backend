const http = require("http");
const express = require("express");
const PORT = 3000;
const server = http.createServer();

server.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
