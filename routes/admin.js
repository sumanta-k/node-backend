const express = require("express");
const path = require("path");

const router = express.Router();

/*  NOTE:     GET   /admin/add-product */

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
    // res.send(
    //     "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>ADD-PRODUCT</button></form>",
    // );
});

router.post("/product", (req, res, next) => {
    console.log(req.body.title);
    res.redirect("/");
});

/* In the end don't forget to EXPORT it */

module.exports = router;
