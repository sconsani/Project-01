const mongoose = require("mongoose");
const Donutstore = require("./donutstore");
console.log("Looking for Donutstore in Bucketlist", Donutstore);

const BucketlistSchema = new mongoose.Schema ({
    userName: String,
    favDonut: String,
    bucketlist: [Donutstore.schema],
    visitedStores: [Donutstore.schema],
});

const Bucketlist = mongoose.model("Bucketlist", BucketlistSchema);

module.exports = Bucketlist;