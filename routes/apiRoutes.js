const express = require("express");
const router = express.Router();
const db = require("../models");
const ctrl = require("../controllers");

// GET DonutStores Index
router.get("/donutstores", ctrl.donutStoresCtrl.index);

// POST Bucketlist Sign-up (create)
router.post("/bucketlist", ctrl.bucketlistsCtrl.signup);

// GET Bucketlist Show (logged-in view)
router.get("/bucketlist/:userName", ctrl.bucketlistsCtrl.show);
router.get("/bucketlist", ctrl.bucketlistsCtrl.index);

// GET Visited Stores
router.get("/bucketlist/:bucketlistId/donutstores/:donutstoreId", ctrl.bucketlistsCtrl.addToVisited);

// PUT Bucketlists Update (add to bucketlist)
router.put("/bucketlist/:bucketlistId", ctrl.bucketlistsCtrl.update);
router.put("/bucketlist/:bucketlistId/donutstores/:donutstoreId", ctrl.bucketlistsCtrl.addToBucketlist);

// DELETE Bucketlists
router.delete("/bucketlist/:bucketlistId", ctrl.bucketlistsCtrl.deleteBucketlist);
router.delete("/bucketlist/:bucketlistId/donutstores/:donutstoreId", ctrl.bucketlistsCtrl.remove);


module.exports = router;