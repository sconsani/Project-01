const db = require("../models");

const index = (req, res) => {
    db.Donutstore.find({}, (err, allDonutstores) => {
        if (err) {
            return res.status(400).json({status: 400, error: "Something went wrong, please try again"});
        }
        res.json(allDonutstores);
    })
};

module.exports = {
    index,
}