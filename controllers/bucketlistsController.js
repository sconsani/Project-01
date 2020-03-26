const db = require("../models");

const index = (req, res) => {
    db.Bucketlist.find({}, (err, allBucketLists) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(allBucketLists);
    });
};

const signup = (req, res) => {
    db.Bucketlist.findOne({userName: req.body.userName}, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        if (foundBucketlist) {
            return res.status(400).json({status: 400, message: "Username already registered, please login"})
        }
        db.Bucketlist.create(req.body, (err, newBucketlist) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.status(201).json(newBucketlist);
        })
    });
};

const show = (req, res) => {
    db.Bucketlist.findOne({userName: req.params.userName}, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        if (!foundBucketlist) {
            return res.status(400).json({status: 400, error: "We can't find your username, please try again"});
            
        } 
        res.json(foundBucketlist);
    })
    
}

// db.DonutStore.findById(req.params.donutStoreId, (err, foundDonutStore) => {
//     if (err) {
//         return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
//     }
    
//     // Add DonutStore to Bucketlist
//     newBucketlist.bucketlist.push(foundDonutStore);

//     // Save Modififed Bucketlist
//     newBucketlist.save((err, savedBucketlist) => {
//         if (err) {
//             return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
//         }
//         res.json(newBucketlist);
//     })
// })

    // db.Bucketlist.findByIdAndUpdate(req.params.bucketlistId, req.body, {new: true}, (err, updatedBucketlist) => {
    //     if (err) {
    //         return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
    //     }
    //     res.json(updatedBucketlist);
    // });

const update = (req, res) => {


    // get DonutStore object 
    // update Bucketlist by pushing store into bucketlist array
    // also update DonutStore object bucketlist array
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
    signup,
    show,
    update,
    remove,
}