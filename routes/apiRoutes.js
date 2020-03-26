const express = require("express");
const router = express.Router();
const db = require("../models");
const ctrl = require("../controllers");

// GET DonutStores Index
router.get("/donutstores", ctrl.donutStoresCtrl.index);

// GET Bucketlists Index
router.get("/bucketlist", ctrl.bucketlistsCtrl.index);

// POST Bucketlists Create
router.post("/bucketlist", ctrl.bucketlistsCtrl.create);

// PUT Bucketlists Update
router.put("/bucketlist/:bucketlistId", ctrl.bucketlistsCtrl.update);

// DELETE Bucketlists
router.delete("/bucketlist/:bucketlistId", ctrl.bucketlistsCtrl.remove);

module.exports = router;