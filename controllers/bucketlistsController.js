const db = require("../models");

const index = (req, res) => {
    db.Bucketlist.find({}, (err, allBucketLists) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(allBucketLists);
    });
};

const create = (req, res) => {
    db.Bucketlist.create(req.body, (err, newBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.status(201).json(newBucketlist);
    });
};

const update = (req, res) => {
    db.Bucketlist.findByIdAndUpdate(req.params.bucketlistId, req.body, {new: true}, (err, updatedBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(updatedBucketlist);
    });
};

const remove = (req, res) => {
    db.Bucketlist.findByIdAndDelete(req.params.bucketlistId, (err, deletedBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(deletedBucketlist);
    });
};

module.exports = {
    index,
    create,
    update,
    remove,
}