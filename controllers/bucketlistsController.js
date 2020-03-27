const db = require("../models");

// const index = (req, res) => {
//     db.Bucketlist.find({}, (err, allBucketLists) => {
//         if (err) {
//             return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
//         }
//         res.json(allBucketLists);
//     });
// };

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
    })
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
    
};

// Delete me when done testing
const update = (req, res) => {
    db.Bucketlist.findByIdAndUpdate(req.params.bucketlistId, req.body, {new: true}, (err, updatedBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(updatedBucketlist);
    })
};

const addToBucketlist = (req, res) => {
    db.DonutStore.findById(req.params.donutstoreId, (err, foundDonutStore) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
    
    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

        foundBucketlist.bucketlist.push(foundDonutStore);

        foundBucketlist.save((err, savedBucketlist) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json(savedBucketlist);
            })
    
        foundDonutStore.bucketlists.push(foundBucketlist);

        foundDonutStore.save((err, savedDonutStore) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json(savedDonutStore);
            })
        })
    })
};

const addToVisited = (req, res) => {
    db.DonutStore.findById(req.params.donutstoreId, (err, foundDonutStore) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
    
    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

        foundBucketlist.visitedStores.push(foundDonutStore);

        foundBucketlist.save((err, savedBucketlist) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json(savedBucketlist);
            })
        })
    })
};

const remove = (req, res) => {
    db.DonutStore.findById(req.params.donutstoreId, (err, foundDonutStore) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
    
        // for (let i = foundBucketlist.bucketlist.length -1; i >= 0; i--) {
        //     if (foundBucketlist.bucketlist[i].id === foundDonutStore.id) {
        //         console.log("Console logging foundBucketlist", foundBucketlist);
        //         foundBucketlist.bucketlist.splice(i, 1);
        //     }
        // }
        // foundBucketlist.save((err, savedBucketlist) => {
        //     if (err) {
        //         return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        //     }
        //     res.json(savedBucketlist);
        //     })

        for (let i = foundDonutStore.bucketlists.length - 1; i >= 0; i--) {
            console.log(foundDonutStore);
            if(foundDonutStore.bucketlists[i].id === foundBucketlist.id) {
                foundDonutStore.bucketlists.splice(i, 1);
            }
        }    
        // foundDonutStore.save((err, savedDonutStore) => {
        //     if (err) {
        //         return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        //     }
        //     res.json(savedDonutStore);
        //     })
        })

     })
};

module.exports = {
    // index,
    update,
    signup,
    show,
    addToBucketlist,
    addToVisited,
    remove,
}