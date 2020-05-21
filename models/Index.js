const mongoose = require("mongoose");

const DB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/doughnit";

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log(`MongoDB error: ${err}`));


module.exports = {
    Donutstore: require("./Donutstore"),
    Bucketlist: require("./Bucketlist"),
};