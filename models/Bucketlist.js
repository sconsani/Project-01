const mongoose = require("mongoose");
const DonutStore = require("./Donutstore");
console.log("Looking for DonutStore in Bucketlist", DonutStore);

const BucketlistSchema = new mongoose.Schema ({
    userName: String,
    favDonut: String,
    bucketlist: [DonutStore.schema],
    visitedStores: [DonutStore.schema],
});

const Bucketlist = mongoose.model("Bucketlist", BucketlistSchema);

module.exports = Bucketlist;