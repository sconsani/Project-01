const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;


app.get("/", (req, res) => res.send(`<h1>DOUGHNIT</h1>`));


app.listen(PORT, () => console.log(`Server running at local host 4000`));