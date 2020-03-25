/ HTML ROUTES
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