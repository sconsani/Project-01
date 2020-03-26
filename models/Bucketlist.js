const mongoose = require("mongoose");
const DonutStore = require("./DonutStore");
console.log("Looking for DonutStore in Bucketlist", DonutStore);

const BucketlistSchema = new mongoose.Schema ({
    userName: String,
    favDonut: String,
    bucketlist: [DonutStore.schema],
    // visited: Boolean, // if the entire bucketlist was visited
    visitedStores: [DonutStore.schema], // if store id exists in list, it was visited
});

const Bucketlist = mongoose.model("Bucketlist", BucketlistSchema);

module.exports = Bucketlist;