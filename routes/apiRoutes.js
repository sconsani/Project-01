const express = require("express");
const router = express.Router();
const db = require("../models");
const ctrl = require("../controllers");

// GET DonutStores Index
router.get("/donutStores", ctrl.donutStoresCtrl.index);

// GET Bucketlists Index
router.get("/bucketlists", ctrl.bucketlistsCtrl.index);

// POST Bucketlists Create
router.post("/bucketlists", ctrl.bucketlistsCtrl.create);

// PUT Bucketlists Update
// router.put("/bucketlists", ctrl.bucketlistsCtrl.update);

// DELETE Bucketlists


module.exports = router;