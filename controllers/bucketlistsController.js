const db = require("../models");

const index = (req, res) => {
    db.Bucketlist.find({}, (err, allBucketlists) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(allBucketlists);
    })
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
    debugger;
    db.DonutStore.findById(req.params.donutstoreId, (err, foundDonutStore) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
    
    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

        foundBucketlist.bucketlist.push(foundDonutStore);

        let updatedBucketlist;
        foundBucketlist.save((err, savedBucketlist) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            updatedBucketlist = savedBucketlist;
            })

        foundDonutStore.bucketlists.push(foundBucketlist.id);
        
        foundDonutStore.save((err, savedDonutStore) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json({updatedDonutStore: savedDonutStore, updatedBucketlist: updatedBucketlist});
            })
        })
    })
};

const addToVisited = (req, res) => {
    debugger;
    db.DonutStore.findById(req.params.donutstoreId, (err, foundDonutStore) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        console.log("logging foundDonutStore", foundDonutStore);

    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

        foundBucketlist.visitedStores.unshift(foundDonutStore);

        foundBucketlist.save((err, savedBucketlist) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json(foundDonutStore);
            })
        })
    })
};

const deleteBucketlist = (req, res) =>{
    db.Bucketlist.findByIdAndDelete(req.params.bucketlistId, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(foundBucketlist);
    })
};

const remove = (req, res) => {
    db.DonutStore.findById(req.params.donutstoreId, (err, foundDonutStore) => {
        console.log("first found donutstore", foundDonutStore);

        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        debugger;
        console.log("logging foundbucketlist", foundBucketlist);
        console.log("logging donutstore", foundDonutStore);
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        
        for (let i = foundBucketlist.bucketlist.length - 1; i >= 0; i--) {
            if (foundBucketlist.bucketlist[i].id === foundDonutStore.id) {
                foundBucketlist.bucketlist.splice(i, 1);
            }
        }

        let delBucketlist;
        foundBucketlist.save((err, savedBucketlist) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            delBucketlist = savedBucketlist;
            console.log("logging delBucketlist", delBucketlist)
            
        console.log("delBucketlist outside of codeblock", delBucketlist)
        for (let i = foundDonutStore.bucketlists.length - 1; i >= 0; i--) {
            if(foundDonutStore.bucketlists[i] == delBucketlist.id) {
                foundDonutStore.bucketlists.splice(i, 1);
            }
        }

        console.log("delBucketlist before DonutStore save", delBucketlist)
        foundDonutStore.save((err, savedDonutStore) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json({delDonutStore: savedDonutStore, delBucketlist: delBucketlist});
            // res.json(savedDonutStore)
            })
        })
    })
 })
};

module.exports = {
    index,
    update, // Delete me after testing
    signup,
    show,
    addToBucketlist,
    addToVisited,
    remove,
    deleteBucketlist,
}