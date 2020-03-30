// SERVER CONFIG
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;


// DATABASE
// do we remove this since it's in routes/index.js
// const db = require("./models")
// console.log("Db in server.js", db);

// Routes
const routes = require("./routes");


// MIDDLEWARE
// Serve Public Directory
app.use(express.static(`${__dirname}/public`));

// BodyParser - Make Request Data Available on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// HTML ROUTES
app.use("/", routes.views);

// API ROUTES
app.use("/api/v1/", routes.api);

// START SERVER
app.listen(process.env.PORT || 3000)