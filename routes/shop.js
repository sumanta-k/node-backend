const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    /*
    console.log("shop.js", adminData.products);
    res.sendFile(path.join(rootDir, "views", "shop.html"));
    */
   // it wasn't rendering the shop.pug , cause we had set it to shop.html in the above line
   // so i had to use the .render() to render shop.pug file
   res.render('shop');
});

module.exports = router;
