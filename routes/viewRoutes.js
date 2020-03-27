const express = require("express");
const router = express.Router();

// Root Route (Homepage)
router.get("/", (req, res) => {
    res.sendFile("views/index.html", {
        root: __dirname + "/../",
    });
});

// About View
router.get("/about", (req, res) => {
    res.sendFile("views/about.html", {
        root: __dirname + "/../",
    });
});

// Bucketlist View
router.get("/bucketlist/:userName", (req, res) => {
    res.sendFile("views/bucketlist.html", {
        root: __dirname + "/../",
    });
});

module.exports = router;