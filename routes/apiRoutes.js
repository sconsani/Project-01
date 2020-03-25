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