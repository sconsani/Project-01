const mongoose = require("mongoose");
const DonutStore = require("./DonutStore");

const BucketlistSchema = new mongoose.Schema ({
    bucketlist: [DonutStore.Schema],
    // visited: Boolean, // if the entire bucketlist was visited
    visitedStores: [DonutStore.Schema], // if store id exists in list, it was visited
    comments: String,
    rating: Number,
});

const Bucketlist = mongoose.model("Bucketlist", BucketlistSchema);

module.exports = Bucketlist;