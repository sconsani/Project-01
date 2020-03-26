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
        
        // Find DonutStore clicked
        db.DonutStore.findById(req.params.donutStoreId, (err, foundDonutStore) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            
            // Add DonutStore to Bucketlist
            newBucketlist.bucketlist.push(foundDonutStore);

            // Save Modififed Bucketlist
            newBucketlist.save((err, savedBucketlist) => {
                if (err) {
                    return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
                }
                res.json(newBucketlist);
            })
        })
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