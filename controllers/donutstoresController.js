const db = require("../models");

const index = (req, res) => {
    db.DonutStore.find({}, (err, allDonutStores) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(allDonutStores);
    })
};


const backHome = (req, res) => {
    db.DonutStore.find({}, (err, allDonutStores) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
    db.Bucketlist.findOne({userName: req.body.userName}, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        if (foundBucketlist) {
            res.json(allDonutStores);
        }
    })
})
};


module.exports = {
    index,
    backHome,
}