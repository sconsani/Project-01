const express = require("express");
const router = express.Router();
const db = require("../models");
const ctrl = require("../controllers");

// GET DonutStores Index
router.get("/donutstores", ctrl.donutStoresCtrl.index);

// PUT Bucketlists Update
// get DonutStore object 
// update Bucketlist by pushing store into bucketlist array
// also update DonutStore object bucketlist array
router.put("/bucketlist/:bucketlistId/donutstores/:donutstoreId", ctrl.bucketlistsCtrl.update);


// DELETE Bucketlists
// can use delete route for removing donutstore from bucketlist
// router.delete("/bucketlist/:bucketlistId", ctrl.bucketlistsCtrl.remove);
// router.delete("/bucketlist/:bucketlistId/donutstores/:donutstoreId", ctrl.bucketlistsCtrl.remove);


// POST sign-up route 
// check if the user exists, if they don't exist, create a new bucketlist
router.post("/bucketlist", ctrl.bucketlistsCtrl.signup);

// GET Bucketlist Show (sign-in)
// get bucketlist based on username
// router.get("/bucketlist", ctrl.bucketlistsCtrl.index);
router.get("/bucketlist/:userName", ctrl.bucketlistsCtrl.show);




module.exports = router;