const db = require("../models");

const index = (req, res) => {
    db.DonutStore.find({}, (err, allDonutStores) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(allDonutStores);
    })
};

module.exports = {
    index,
}