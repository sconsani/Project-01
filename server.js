// SERVER CONFIG
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;


// DATABASE
const db = require("./models")

// Init Route
app.get("/", (req, res) => res.send(`<h1>DOUGHNIT</h1>`));


// MIDDLEWARE
// Serve Public Directory
app.use(express.static(`${__dirname}/public`));

// BodyParser - Make Request Data Available on req.body
app.use(bodyParser.json());


// HTML ROUTES
app.use("/", routes.views);

// API ROUTES
app.use("/", routes.api);

// START SERVER
app.listen(PORT, () => console.log(`Server running at local host 4000`));