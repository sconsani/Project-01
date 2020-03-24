const mongoose = require("mongoose");
const DonutStore = require("./DonutStore");

const BucketlistSchema = new mongoose.Schema ({
    bucketlist: [DonutStore.Schema],
    visited: Boolean,
    visitedStores: [DonutStore.Schema],
    comments: String,
    rating: Number,
});

const Bucketlist = mongoose.model("Bucketlist", BucketlistSchema);

module.exports = Bucketlist;