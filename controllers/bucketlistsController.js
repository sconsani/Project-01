const db = require("../models");

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

const addToBucketlist = (req, res) => {
    debugger;
    db.Donutstore.findById(req.params.donutstoreId, (err, foundDonutstore) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
    
    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

        foundBucketlist.bucketlist.push(foundDonutstore);

        let updatedBucketlist;
        foundBucketlist.save((err, savedBucketlist) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            updatedBucketlist = savedBucketlist;
            })

        foundDonutstore.bucketlists.push(foundBucketlist.id);
        
        foundDonutstore.save((err, savedDonutstore) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json({updatedDonutstore: savedDonutstore, updatedBucketlist: updatedBucketlist});
            })
        })
    })
};

const addToVisited = (req, res) => {
    debugger;
    db.Donutstore.findById(req.params.donutstoreId, (err, foundDonutstore) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        console.log("logging foundDonutstore", foundDonutstore);

    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

        foundBucketlist.visitedStores.unshift(foundDonutstore);

        foundBucketlist.save((err, savedBucketlist) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json(foundDonutstore);
            })
        })
    })
};

const remove = (req, res) => {
    db.Donutstore.findById(req.params.donutstoreId, (err, foundDonutstore) => {
        console.log("first found donutstore", foundDonutstore);

        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }

    db.Bucketlist.findById(req.params.bucketlistId, (err, foundBucketlist) => {
        debugger;
        console.log("logging foundbucketlist", foundBucketlist);
        console.log("logging donutstore", foundDonutstore);
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        
        for (let i = foundBucketlist.bucketlist.length - 1; i >= 0; i--) {
            if (foundBucketlist.bucketlist[i].id === foundDonutstore.id) {
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
        for (let i = foundDonutstore.bucketlists.length - 1; i >= 0; i--) {
            if(foundDonutstore.bucketlists[i] == delBucketlist.id) {
                foundDonutstore.bucketlists.splice(i, 1);
            }
        }

        console.log("delBucketlist before Donutstore save", delBucketlist)
        foundDonutstore.save((err, savedDonutstore) => {
            if (err) {
                return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
            }
            res.json({delDonutstore: savedDonutstore, delBucketlist: delBucketlist});
            })
        })
    })
 })
};

module.exports = {
    signup,
    show,
    addToBucketlist,
    addToVisited,
    remove,
}