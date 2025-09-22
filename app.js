const http = require("http");
const fs = require("fs");
const PORT = 3000;
const routes = require("./routes.js");
const server = http.createServer(routes);

// server.listen(`${PORT}`, () => {
//     console.log(`Your server is running on port ${PORT}`);
// });
//

server.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
