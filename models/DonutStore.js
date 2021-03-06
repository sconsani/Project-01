const mongoose = require("mongoose");

const DonutStoreSchema = new mongoose.Schema({
    place_id: String,
    name: String,
    formatted_address: String,
    rating: Number,
    photo: {
        html_attributions: String,
        height: Number,
        width: Number,
        photo_reference: String,
    },
    weekday_text: String,
    bucketlists: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Bucketlist"
    }
})

const DonutStore = mongoose.model("DonutStore", DonutStoreSchema);

module.exports = DonutStore;