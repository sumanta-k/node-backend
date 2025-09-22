const fs = require("fs");
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<header><meta charset='UTF-8'></header>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'><button>Send</button></form></body>",
        );
        res.write("</html>");
        return res.end();
    }

    /* TODO: Redirect the users after submitting their form */
    /***********************************************************/

    if (req.url === "/message" && method === "POST") {
        /* NOTE: how about if we try to work with the user's entered value */
        const body = []; /* for storing the user's entered value */

        /* WARNING: as you know that you can't work with the "stream" , you need buffer for that */
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        /* NOTE: another event listener , this will fire when once incoming request has been parsed */
        return req.on("end", () => {
            /* To work with them , we want buffer */
            /* TODO: it will create a buffer , by combining all the chunks of streams and convert them into buffer */
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);

            const usersEnteredMessage =
                parsedBody.split("=")[1]; /* message=happy [0=1] */
            /* NOTE: we're moving our fs.writeFileSync to "req.on()" event listener , Why ? Cause the fs.writeFileSync will run befor the "req.on()" event listener executed , so we first want to execute the "req.on()" event listener , then the usersEnteredValue will go to "fs.writeFileSync" to put the data into file*/
            fs.writeFile("message.txt", usersEnteredMessage, (err) => {
                /* then it should redirect to "home" page with creating a file , where user's entered value is going to store */
                res.statusCode = 302; /* in developer tool , you won't know what stuff has redirect , to know about redirection , you can follow the statusCode (302) as ---> redirection */
                res.setHeader(
                    "Location",
                    "/",
                ); /* Location will automatically take the server's path like in my case ---> http://localhost  */
                return res.end();
            });
        });
    }
    /***********************************************************/

    /* this block of code going to execute after the first block of code [ url === '/'] --> this block of code got executed and after that below code is going to execute , Why below code is executing after we have set "return res.end()" ---> This should have ended */

    /* The only reason that it is rendering the after block of code:
     * Because you are no longer at "/" page , you have redirected to "/submit" page
     * And We didn't specify for which path should be use the below block of code.
     * So it is by default giving results for every path
     *
     * Eg:-
     * "/mechamaru" ,"/ben-ten", "/aldjkd" , ----> every path apart from "/" is going to show the below block of
     * block of code , Cause it doesn't have any "path" attached to itself
     *
     * */

    /* NOTE: i'm using these code as redirection for /message page , i don't want my user's to stuck on "/message" page , so i'm redirecting them to "/" */

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><meta charset='UTF-8'><title>Homepage</title></header>");
    res.write("<body><h1>HomePage</h1></body>");
    res.write("</html>");
    res.end();
};

/* NOTE: exporting as an OBJECT */
/* 
module.exports = {
    rqHandler: requestHandler,
    someText: "Some hard coded Text",
};
*/

/*
module.exports.text = "some hard coded text";
module.exports.handler = requestHandler;
*/
module.exports = requestHandler;
/*
exports.hand = requestHandler;
exports.hardtext = "some hardcoded text";
*/
