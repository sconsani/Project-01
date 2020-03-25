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

// const update = (req, res) => {
//     db.Bucketlist.findbyId(req.params.bucketlistId, (err, foundBucketlist) => {
//         if (err) {
//             return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
//         }

//         const donutStoreToUpdate = foundBucketlist.donutStore.id(req.params.donutStoreId);

//         if (!donutStoreToUpdate) {
//             return res.status(400).json({status: 400, error: "Could not find donutStoreToUpdate"})
//         }

//         donutStoreToUpdate

//     })
// }

module.exports = {
    index,
    create,
}