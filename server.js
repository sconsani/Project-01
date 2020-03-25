// SERVER CONFIG
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;


// DATABASE
const db = require("./models")

// MongoDB Connection String
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/express-cities';

// Connect MongoDB
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(`MongoDB error: ${err}`));

// Init Route
app.get("/", (req, res) => res.send(`<h1>DOUGHNIT</h1>`));


// MIDDLEWARE
// Serve Public Directory
app.use(express.static(`${__dirname}/public`));

// BodyParser - Make Request Data Available on req.body
app.use(bodyParser.json());


// HTML ROUTES
//Homepage- Gallery of Donut Stores
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname,
  });
});

//My Bucketlist Page
app.get('/my-bucketlist', (req, res) => {
  res.sendFile('views/bucketlist.html', {
    root: __dirname,
  });
});


//About Us Page
app.get('/about-us', (req, res) => {
  res.sendFile('views/about.html', {
    root: __dirname,
  });
});

// API ROUTES

app.get('/api/v1/', (req, res) => {
  DonutStore.find({}, (err, allStores) => {
    if (err) {
      return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    }

    res.json(donutStores);
  });
});

//added bucketlist stores
app.get('/api/v1/my-bucketlist', (req, res) => {
  DonutStore.find({}, (err, bucketlistItems) => {
    if (err) {
      return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    }

    res.json(addedStores);
  });
});








// START SERVER
app.listen(PORT, () => console.log(`Server running at local host 4000`));